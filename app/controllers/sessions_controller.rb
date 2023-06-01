class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]
  
    def create
      user = User.find_by(username: params[:username].downcase)
      # puts params
      if user.present? && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        return render json: { error: "Wrong username or password" }
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
end