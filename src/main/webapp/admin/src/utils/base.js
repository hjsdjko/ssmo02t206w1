const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmo02t206w/",
            name: "ssmo02t206w",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmo02t206w/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家用电器在线销售系统的设计与实现"
        } 
    }
}
export default base
