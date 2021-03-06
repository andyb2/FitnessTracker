const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                require: "Enter exercise type"
            },
            name: {
                type: String,
                require: 'Enter workout name'
            },
            duration: {
                type: Number,
                required: 'Enter workout duration'
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}
)


// type: "resistance",
//     name: "Bicep Curl",
//         duration: 20,
//             weight: 100,
//                 reps: 10,
//                     sets: 4



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
