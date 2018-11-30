export default {
    routes: [{
        path: "/",
        component: "../Layout",
        routes: [{
            path: "/",
            component: "./HelloWorld"
        }, {
            path: "/dashboard",
            routes: [
                { path: "/dashboard/analysis" , component: "./DashBoard/Analysis.js"},
                { path: "/dashboard/monitor" , component: "./DashBoard/Monitor.js"},
                { path: "/dashboard/workplace" , component: "./DashBoard/Workplace.js"}
            ]
        }, {
            path: "/puzzlecards",
            component: "./PuzzleCards"
        }, {
            path: "list",
            component: "./List"
        }]
    }],
    plugins: [
        ["umi-plugin-react",{
            antd: true,
            dva: true
        }]
    ],
    proxy: {
        "/test": {
            target: "http://114.116.89.193:8999",
            changeOrigin: true
        }
    },
    publicPath: "./"
};