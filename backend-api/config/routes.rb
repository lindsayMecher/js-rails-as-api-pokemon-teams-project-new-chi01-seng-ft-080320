Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :pokemons, only: [:show, :index, :create, :update, :destroy]
      resources :trainers, only: [:show, :index, :create, :update, :destroy]
    end 
  end 

end
