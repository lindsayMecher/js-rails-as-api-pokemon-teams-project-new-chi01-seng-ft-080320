class Api::V1::PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all 
        render json: pokemons
    end 

    def show 
        pokemon = Pokemon.find(params[:id])
        render json: pokemon
    end 

    def create
        trainer = Trainer.find(params[:trainerId])
        if trainer.pokemons.count >= 6
            render json: {message: "Only 6 pokemon allowed on a trainer's team"}
        else 
            pokemon = Pokemon.create(nickname: "pokepoke", species: "generic pokemon", trainer: trainer)
            if pokemon.save 
                render json: pokemon
            else 
                render json: {message: pokemon.errors.full_messages}
            end 
        end
    end 

    def update
        byebug
    end 

    def destroy 
        pokemon = Pokemon.find(params[:id])
        pokemon.destroy
        render json: {message: "successfully released from team.", id: pokemon.id}
    end 

    private 

    def pokemon_params 
        params.require(:pokemon).permit(:nickname, :species, :trainer_id)
    end 

end
