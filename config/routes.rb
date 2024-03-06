Rails.application.routes.draw do
  devise_for :users
  root to: "tops#index"
  resources :meals, only: [:index, :new]
end
