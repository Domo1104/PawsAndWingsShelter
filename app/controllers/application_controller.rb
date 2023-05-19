class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    include ActionController::Cookies

    before_action :authorized
    def authorized
      render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_not_found(error)
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
        # use if, above doesn't handle errors
        # render json: {errors: {error.model: "Not Found"}}, status: :not_found
    end
end
