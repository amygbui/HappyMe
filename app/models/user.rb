class User < ApplicationRecord
  validates :name, :username, :password_digest,
            :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_attached_file :avatar, default_url: "default_avatar.jpg",
    styles: {
      medium: "600x600"
    }

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :reviews,
    class_name: 'Review',
    primary_key: :id,
    foreign_key: :author_id

  has_many :reviewed_restaurants,
    through: :reviews,
    source: :restaurant

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
