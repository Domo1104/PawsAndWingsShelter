class OrganizationsController < ApplicationController

    #GET /organizations
    def index
        organization = Organization.all
        render json: organizations
    end

    #GET /organizations/:id
    def show
        organization = find_organization
    end

    #POST /organizations/:id
    def create
        organization = Organization.create!(organization_params)
        render json: organization, status: :created
    end

    #PATCH /organizations/:id
    def update
        organization = find_organization
        organization.update(organization_params)
        render json: organization
    end

    #DELETE /organization/:id
    def destroy
        organization = find_organization
        organization.destroy
        head :no_content
    end

    private

    def find_organization
        Organization.find_by(id: params[:id])
    end

    def organization_params
        params.permit(:name, :location, :email, :phone)
    end

    def authorized
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
