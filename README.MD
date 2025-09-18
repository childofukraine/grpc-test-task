# Clone the repository

git clone https://github.com/childofukraine/grpc-test-task.git
cd grpc-test-task

# Start all services

docker-compose up

# Run in detached mode

docker-compose up -d

# Stop services

docker-compose down

# View logs

docker-compose logs -f

# Local Development

# Start Producer (in first terminal)

cd producer
npm install
npm run start:dev

# Start Consumer (in second terminal)

cd consumer
npm install
npm run start:dev
