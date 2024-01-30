Rails.application.routes.draw do
  root to: "tops#index"
  resources :meals, only: [:index, :new]
end
