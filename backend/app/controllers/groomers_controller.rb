class GroomersController < ApplicationController

  DATA = [
    { id: 1, name: "Callum's Pups", location: 'London', rating: 4.5, services: ['Dry Blow', 'Nail Clipping, Ear Clean']},
    { id: 2, name: "Cec's Kittens", location: 'Manchester', rating: 4.25, services: ['Dry Blow', 'Nail Clipping, Ear Clean']},
    { id: 3, name: "Dave's Dogs", location: 'Brighton', rating: 3.75, services: ['Dry Blow', 'Nail Clipping, Ear Clean']},
    { id: 4, name: "Peter's Poodles", location: 'London', rating: 4, services: ['Dry Blow', 'Nail Clipping, Ear Clean']}
  ]

  def index
    render json: DATA
  end

  def show
    groomer = DATA.select { |d| d[:id] == params[:id].to_i  }.first
    if groomer
      render json: groomer
    else
      render status: 404  
    end
  end
end
