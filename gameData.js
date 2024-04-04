export default gameData = {
    players:[
        {
            id: 1,
            name: "Player 1",
            password: "azerty"
        }
    ],
    games:[
        {
            id:1,
            name:"first Part",
        },
        {
            id:2,
            name:"Second Part",
        }
    ],
    gamesConf : [
        {
            id:1,
            game_id : 1,
            extension : 'Ruine'
        }
    ],
    players_in_games:[
        {
            id:1,
            player_id : 1,
            game_id : 1,
            class: 'Warrior',
            capacity_one : 1,
            capacity_one_level: 1,
            capacity_two : 2,
            capacity_two_level: 2,
            skill : 2,
            skill_level : 1
        }
    ]
}
