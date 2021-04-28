Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :slots, only: [:create] do
    collection do
      get :general
      get :special
      get :slot_info
      post :free_slot
      post :occupie_slot
    end
  end

  resources :contact_us, only: [:index]

  root "home#index"
end
