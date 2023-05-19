Rails.application.routes.draw do
  resources :organizations
  resources :pets
  resources :users, only: [:index, :show, :create, :update]
  resources :favorites
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  get "/accountinfo", to: "users#index"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"

end
