class Api::V1::TrainersController < ApplicationController
    before_action :get_random_pokemon

    def index
        trainers = Trainer.all 
        render json: trainers
    end 

    def show 
        trainer = Trainer.find(params[:id])
        render json: trainer
    end 

    private 

    def get_random_pokemon 
        # add functionality to find a random pokemon from the database
        # then associate the poke with this trainer????
    end 

end
