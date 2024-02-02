# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "staple_food", to: "staple_food.js"
pin "main_dish", to: "main_dish.js"
pin "side_dish", to: "side_dish.js"
pin "result", to: "result.js"