export default {
    routes: [{
        path: "/",
        component: "../Layout",
        routes: [{
            path: "/helloworld",
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
        }]
    }],
    plugins: [
        ["umi-plugin-react",{
            antd: true,
            dva: true
        }]
    ]
};