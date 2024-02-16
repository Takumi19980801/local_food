# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "staple_food", to: "staple_food.js"
pin "main_dish", to: "main_dish.js"
pin "side_dish", to: "side_dish.js"
pin "staple_food_count", to: "staple_food_count.js"
pin "main_dish_count", to: "main_dish_count.js"
pin "side_dish_count", to: "side_dish_count.js"
pin "result1", to: "result1.js"
pin "result2", to: "result2.js"
pin "result3", to: "result3.js"
pin "addition", to: "addition.js"
pin "SB_create", to: "SB_create.js"