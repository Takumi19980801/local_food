class MealsController < ApplicationController

  def index
  end

  def new
    @staple_food = StapleFood.new
    @count = Count.new
  end
  
end
