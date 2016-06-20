Rails.application.routes.draw do
  devise_for :users
  root to: "tweets#index"
  resources :tweets, only: [:index, :show, :new, :create, :destroy, :edit, :update]
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :tweets do
        resources :comments
      end
    end
  end
  resources :comments, only: [:create]
  resources :users, only: [:show]
end
