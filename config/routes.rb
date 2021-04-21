Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :slots, only: [] do
    collection do
      get :general
      get :special
    end
  end

  root "home#index"
end
