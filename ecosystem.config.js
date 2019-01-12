module.exports = {
    apps: [{
        script: "./bin/www",
        node_args:"--max_old_space_size=4096",
        watch: true,
        ignore_watch : ['node_modules'],
        env_development: {
            "name": "Node Server API Dev",
            "NODE_ENV": "development"
        },
        env_production : {
            "name": "Node Server API Prod",
            "NODE_ENV": "production"
        }
    }]
};