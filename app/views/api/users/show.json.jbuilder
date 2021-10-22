#json.set! @user.id do
#  json.extract! @user, :id, :username, :email
#end
json.partial! "api/users/user", user: @user

