class UsersController < ApplicationController


    #GET /users
    def index
        user = User.all
        render json: user
    end

    #GET /users/:id
    def show
        user = Show.find(params[:id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    #POST /users/:id
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    #PATCH /users/:id
    def update
        user = find_user
        user.update(user_params)
        render json: user
    end

    def check_email
        return unless params[:email].present?

        user = User.find_by_email(params[:email].downcase)
        return "Email is taken" if Recurly::Account.find(user) "Available"
    end

    private

    def find_user
        User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:username, :first_name, :last_name, :email, :phone, :address, :city_town, :state, :zipcode, :password_digest)
    end

    def authorized
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
