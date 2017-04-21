@resviews.each do |resview|
  json.set! resview.id do
    json.partial! "api/resviews/resview", resview: resview
  end
end
