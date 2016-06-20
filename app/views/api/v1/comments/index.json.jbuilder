json.data(@comments) { |d| json.extract!(d, :text, :user) }
# json.data(@comments)で配列状態のデータを取得。その後｛｝内でdに分解してextractでデータを取得。
# dは@commentsの配列を分解したもの。:tweetと:userでd、commentにむずびつくレコードを取ってくる。