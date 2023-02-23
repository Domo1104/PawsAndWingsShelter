Rails.application.routes.draw do
  resources :organizations
  resources :pets
  resources :users, only: [:index, :show, :create, :update]
  resources :favorites
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
