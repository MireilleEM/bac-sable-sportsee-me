// src/data/mockData.js
export const USER_INFO = [
  { "id": "user123", 
    "profile": {
        "firstName": "Sophie",
        "lastName": "Martin",
        "createdAt": "2025-01-01",
        "age": 32,
        "weight": 60,
        "height": 165,
        "profilePicture": "http://localhost:8000/images/sophie.jpg"
    }, 
    "statistics": {
        "totalDistance": "2250.2",
        "totalSessions": 348,
        "totalDuration": 14625
    },
},
   { "id": "user456", 
     "profile": {
        "firstName": "Marc",
        "lastName": "Dubois",
        "createdAt": "2025-01-01",
        "age": 45,
        "weight": 85,
        "height": 180,
        "profilePicture": "http://localhost:8000/images/marc.jpg"
    },
    "statistics": {
        "totalDistance": "501.7",
        "totalSessions": 130,
        "totalDuration": 3555
    },
   },
    { "id": "user789", 
      "profile": {
        "firstName": "Emma",
        "lastName": "Leroy",
        "createdAt": "2025-01-01",
        "age": 28,
        "weight": 62,
        "height": 170,
        "profilePicture": "http://localhost:8000/images/emma.jpg"
    },
    "statistics": {
        "totalDistance": "3791.4",
        "totalSessions": 607,
        "totalDuration": 22624
    },
    }
];


export const USER_ACTIVITY = [
    {
        "userId": "user123",
        "sessions": [
    {
        "date": "2025-01-04",
        "distance": 5.8,
        "duration": 38,
        "heartRate": {
            "min": 140,
            "max": 178,
            "average": 163
        },
        "caloriesBurned": 422
    },
    {
        "date": "2025-01-05",
        "distance": 3.2,
        "duration": 20,
        "heartRate": {
            "min": 148,
            "max": 184,
            "average": 171
        },
        "caloriesBurned": 248
    }
]},
{
    "userId": "user456",
    "sessions": [
    {
        "date": "2025-01-02",
        "distance": 5.5,
        "duration": 33,
        "heartRate": {
            "min": 140,
            "max": 175,
            "average": 158
        },
        "caloriesBurned": 370
    },
    {
        "date": "2025-01-04",
        "distance": 6.2,
        "duration": 37,
        "heartRate": {
            "min": 142,
            "max": 178,
            "average": 160
        },
        "caloriesBurned": 410
    },
    {
        "date": "2025-01-06",
        "distance": 4.8,
        "duration": 29,
        "heartRate": {
            "min": 138,
            "max": 172,
            "average": 155
        },
        "caloriesBurned": 320
    },
    {
        "date": "2025-01-09",
        "distance": 7,
        "duration": 42,
        "heartRate": {
            "min": 141,
            "max": 177,
            "average": 162
        },
        "caloriesBurned": 470
    }
]},
{
    "userId": "user789",
    "sessions": [
            {
                "date": "2025-01-05",
                "distance": 3,
                "duration": 22,
                "heartRate": { "min": 120, "max": 145, "average": 132 },
                "caloriesBurned": 180
            },
            {
                "date": "2025-01-19",
                "distance": 4.2,
                "duration": 30,
                "heartRate": { "min": 122, "max": 148, "average": 135 },
                "caloriesBurned": 220
            }]}
]

export const USER_ACTIVITY_WITH_ID = [
    {"sessions": [
    {
        "date": "2025-01-04",
        "distance": 5.8,
        "duration": 38,
        "heartRate": {
            "min": 140,
            "max": 178,
            "average": 163
        },
        "caloriesBurned": 422
    },
    {
        "date": "2025-01-05",
        "distance": 3.2,
        "duration": 20,
        "heartRate": {
            "min": 148,
            "max": 184,
            "average": 171
        },
        "caloriesBurned": 248
    }
]},
{"sessions": [
    {
        "date": "2025-01-02",
        "distance": 5.5,
        "duration": 33,
        "heartRate": {
            "min": 140,
            "max": 175,
            "average": 158
        },
        "caloriesBurned": 370
    },
    {
        "date": "2025-01-04",
        "distance": 6.2,
        "duration": 37,
        "heartRate": {
            "min": 142,
            "max": 178,
            "average": 160
        },
        "caloriesBurned": 410
    },
    {
        "date": "2025-01-06",
        "distance": 4.8,
        "duration": 29,
        "heartRate": {
            "min": 138,
            "max": 172,
            "average": 155
        },
        "caloriesBurned": 320
    },
    {
        "date": "2025-01-09",
        "distance": 7,
        "duration": 42,
        "heartRate": {
            "min": 141,
            "max": 177,
            "average": 162
        },
        "caloriesBurned": 470
    }
]},
{"sessions": [
            {
                "date": "2025-01-05",
                "distance": 3,
                "duration": 22,
                "heartRate": { "min": 120, "max": 145, "average": 132 },
                "caloriesBurned": 180
            },
            {
                "date": "2025-01-19",
                "distance": 4.2,
                "duration": 30,
                "heartRate": { "min": 122, "max": 148, "average": 135 },
                "caloriesBurned": 220
            }]}
]


export const USER_MAIN = [
  { "id": "user123", 
    "profile": {
        "firstName": "Sophie",
        "lastName": "Martin",
        "createdAt": "2025-01-01",
        "age": 32,
        "weight": 60,
        "height": 165,
        "profilePicture": "http://localhost:8000/images/sophie.jpg"
    }, 
    "statistics": {
        "totalDistance": "2250.2",
        "totalSessions": 348,
        "totalDuration": 14625
    },
    "sessions": [
    {
        "date": "2025-01-04",
        "distance": 5.8,
        "duration": 38,
        "heartRate": {
            "min": 140,
            "max": 178,
            "average": 163
        },
        "caloriesBurned": 422
    },
    {
        "date": "2025-01-05",
        "distance": 3.2,
        "duration": 20,
        "heartRate": {
            "min": 148,
            "max": 184,
            "average": 171
        },
        "caloriesBurned": 248
    }
]},
   { "id": "user456", 
     "profile": {
        "firstName": "Marc",
        "lastName": "Dubois",
        "createdAt": "2025-01-01",
        "age": 45,
        "weight": 85,
        "height": 180,
        "profilePicture": "http://localhost:8000/images/marc.jpg"
    },
    "statistics": {
        "totalDistance": "501.7",
        "totalSessions": 130,
        "totalDuration": 3555
    },
    "sessions": [
    {
        "date": "2025-01-02",
        "distance": 5.5,
        "duration": 33,
        "heartRate": {
            "min": 140,
            "max": 175,
            "average": 158
        },
        "caloriesBurned": 370
    },
    {
        "date": "2025-01-04",
        "distance": 6.2,
        "duration": 37,
        "heartRate": {
            "min": 142,
            "max": 178,
            "average": 160
        },
        "caloriesBurned": 410
    },
    {
        "date": "2025-01-06",
        "distance": 4.8,
        "duration": 29,
        "heartRate": {
            "min": 138,
            "max": 172,
            "average": 155
        },
        "caloriesBurned": 320
    },
    {
        "date": "2025-01-09",
        "distance": 7,
        "duration": 42,
        "heartRate": {
            "min": 141,
            "max": 177,
            "average": 162
        },
        "caloriesBurned": 470
    }
]},
    { "id": "user789", 
      "profile": {
        "firstName": "Emma",
        "lastName": "Leroy",
        "createdAt": "2025-01-01",
        "age": 28,
        "weight": 62,
        "height": 170,
        "profilePicture": "http://localhost:8000/images/emma.jpg"
    },
    "statistics": {
        "totalDistance": "3791.4",
        "totalSessions": 607,
        "totalDuration": 22624
    },
    "sessions": [
            {
                "date": "2025-01-05",
                "distance": 3,
                "duration": 22,
                "heartRate": { "min": 120, "max": 145, "average": 132 },
                "caloriesBurned": 180
            },
            {
                "date": "2025-01-19",
                "distance": 4.2,
                "duration": 30,
                "heartRate": { "min": 122, "max": 148, "average": 135 },
                "caloriesBurned": 220
            }]
    }
];

export const IDENTIFIANTS =[
    {"firstName": "Sophie",
    "lastName": "Martin"},
    {"firstName": "Marc",
    "lastName": "Dubois"},
    {"firstName": "Emma",
    "lastName": "Leroy"}
]



export const DATA =[
{
    "id": "user123",
    "weeklyGoal": 2,
  "userInfos": {
    "firstName": "Sophie",
    "lastName": "Martin",
    "age": 32,
    "gender": "female",
    "profilePicture": "http://localhost:8000/images/sophie.jpg",
    "height": 165,
      "weight": 60,
      "createdAt": "2025-01-01"
  },
    "username": "sophiemartin",
    "password": "password123",
  "runningData": [
    {"date":"2025-01-04",
     "distance":5.8,
     "duration":38,
     "heartRate":{
        "min":140,
        "max":178,
        "average":163},
     "caloriesBurned":422},
    {"date":"2025-01-05",
     "distance":3.2,
     "duration":20,
     "heartRate":{
        "min":148,
        "max":184,
        "average":171},
     "caloriesBurned":248}
  ]
  },
  {
    "id": "user789",
    "goal": 3,
    "userInfos": {
      "firstName": "Emma",
      "lastName": "Leroy",
      "age": 28,
      "gender": "female",
      "height": 170,
      "weight": 62,
      "profilePicture": "http://localhost:8000/images/emma.jpg",
      "createdAt": "2025-01-01"
    },}]

    export const USER_CONNEXION = [
        {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwiaWF0IjoxNzc1OTkxNDQzLCJleHAiOjE3NzYwNzc4NDN9.NOFd6Vj7r7MTI_lCBtvt6XnUfH5sZxJI5Bo_DuJOyBM",
    "userId": "user123"
        },
        {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyNDU2IiwiaWF0IjoxNzc1OTkxNDk5LCJleHAiOjE3NzYwNzc4OTl9.Y3F9xGgmATVLyFMoQc-YRTkLR6FPAn41SHE43WtRbTo",
    "userId": "user456"
        },
        {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyNzg5IiwiaWF0IjoxNzc1OTg1ODkwLCJleHAiOjE3NzYwNzIyOTB9.ot36PWU9WRGzX3tz5XngUD-nXRSNcw-zZNHELmgPrII",
    "userId": "user789"
        }
    ]

