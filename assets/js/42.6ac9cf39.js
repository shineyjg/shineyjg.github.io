(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{412:function(a,t,r){"use strict";r.r(t);var v=r(5),_=Object(v.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"对现有单体系统的改造"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对现有单体系统的改造","aria-hidden":"true"}},[a._v("#")]),a._v(" 对现有单体系统的改造")]),a._v(" "),r("ul",[r("li",[a._v("不要一下子全部分解，而是先抽取收益最大的部分，采用增量的方式。")]),a._v(" "),r("li",[a._v("而且必须注意到拆分一定会犯错，渐进式重构系统，会让我们有充足时间发现错误并改正。")])]),a._v(" "),r("h2",{attrs:{id:"微服务划分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务划分","aria-hidden":"true"}},[a._v("#")]),a._v(" 微服务划分")]),a._v(" "),r("ul",[r("li",[a._v("基础服务（日志分析、配置服务器、服务发现、服务授权、分布式追踪、监控）")]),a._v(" "),r("li",[a._v("核心业务服务（避免互相调用）")]),a._v(" "),r("li",[a._v("上层聚合业务服务（允许调用核心服务）")])]),a._v(" "),r("h2",{attrs:{id:"微服务大小考量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务大小考量","aria-hidden":"true"}},[a._v("#")]),a._v(" 微服务大小考量")]),a._v(" "),r("ul",[r("li",[a._v("服务越小，独立性带来的好处越多")]),a._v(" "),r("li",[a._v("但管理大量服务的系统本身也会越复杂")])]),a._v(" "),r("h2",{attrs:{id:"架构设计的时候需要确定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构设计的时候需要确定","aria-hidden":"true"}},[a._v("#")]),a._v(" 架构设计的时候需要确定")]),a._v(" "),r("ul",[r("li",[a._v("是否真的需要强一致性，还是最终一致性。")]),a._v(" "),r("li",[a._v("强一致性： 最好避免事务分布在不同的地方。")]),a._v(" "),r("li",[a._v("如果最终一致性可以接受，则可以拆分成不同服务（不一定非要拆分）")])]),a._v(" "),r("h2",{attrs:{id:"犯错无法避免"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#犯错无法避免","aria-hidden":"true"}},[a._v("#")]),a._v(" 犯错无法避免")]),a._v(" "),r("p",[a._v("为了在影响小的地方修正错误。可以在便利贴上模拟服务，每个便利贴写上职责，贴到白板上。\n然后虚拟运行尽可能多的实际用例，看：")]),a._v(" "),r("ul",[r("li",[a._v("每个用例用到了哪些服务？")]),a._v(" "),r("li",[a._v("依赖路径是否过长？")]),a._v(" "),r("li",[a._v("循环依赖？")]),a._v(" "),r("li",[a._v("两个服务通讯太密集，是否合并？")])]),a._v(" "),r("h2",{attrs:{id:"尽量避免或者禁止不同的微服务强依赖一个独立的源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尽量避免或者禁止不同的微服务强依赖一个独立的源","aria-hidden":"true"}},[a._v("#")]),a._v(" 尽量避免或者禁止不同的微服务强依赖一个独立的源")]),a._v(" "),r("p",[a._v("如某个自己开发的Lib（不管是编译期绑定还是单独jar），除非该Lib非常稳定，而且长时间不会改动，否则升级Lib会导致所有微服务都要升级，这对系统可能造成巨大影响。")]),a._v(" "),r("p",[a._v("总结：")]),a._v(" "),r("p",[a._v("微服务内部贯彻DRY，跨微服务情况可以适当违反DRY")]),a._v(" "),r("h2",{attrs:{id:"异步跨服务传递的信息可能会过期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步跨服务传递的信息可能会过期","aria-hidden":"true"}},[a._v("#")]),a._v(" 异步跨服务传递的信息可能会过期")]),a._v(" "),r("p",[a._v("对信息可用性要求高的场合需要传递引用，如id，接收方收到后需重新根据id同步向特定微服务查询信息。但如果全部按引用来设计可能导致某些查询微服务过热。")]),a._v(" "),r("h2",{attrs:{id:"由于微服务数量多，host也多，物理机也多，必须自动化测试、发布、部署、监控等"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#由于微服务数量多，host也多，物理机也多，必须自动化测试、发布、部署、监控等","aria-hidden":"true"}},[a._v("#")]),a._v(" 由于微服务数量多，host也多，物理机也多，必须自动化测试、发布、部署、监控等")]),a._v(" "),r("h2",{attrs:{id:"测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),r("ul",[r("li",[a._v("前期可以多依赖端到端测试")]),a._v(" "),r("li",[a._v("后期可以减少端到端测试，依赖契约测试和线上监控")])]),a._v(" "),r("h2",{attrs:{id:"新的部署需要考虑是否采用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新的部署需要考虑是否采用","aria-hidden":"true"}},[a._v("#")]),a._v(" 新的部署需要考虑是否采用")]),a._v(" "),r("ul",[r("li",[a._v("蓝绿部署")]),a._v(" "),r("li",[a._v("滚动发布")]),a._v(" "),r("li",[a._v("灰度/金丝雀部署")])]),a._v(" "),r("h2",{attrs:{id:"使用关联标识在服务调用之间传递"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用关联标识在服务调用之间传递","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用关联标识在服务调用之间传递")]),a._v(" "),r("p",[a._v("可以跟踪调用链，解决问题。特别是异步场景，需要在开始时设计。")]),a._v(" "),r("h2",{attrs:{id:"不只规范单个服务，更重要的是要规范整个系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不只规范单个服务，更重要的是要规范整个系统","aria-hidden":"true"}},[a._v("#")]),a._v(" 不只规范单个服务，更重要的是要规范整个系统")]),a._v(" "),r("h2",{attrs:{id:"报表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#报表","aria-hidden":"true"}},[a._v("#")]),a._v(" 报表")]),a._v(" "),r("p",[a._v("报表可能横跨多个服务，一般而言通过发布订阅消息方式解藕。\n对于某些报表系统，可能nosql更合适，比如Neo4j， Cassandra， MongoDB\n报表也分仪表盘、告警、普通报告、用户分析等，他们的时效性是不同的，需要使用不同的技术。")]),a._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),r("ul",[r("li",[a._v("为了避免配置漂移，禁止任何人登录到服务器手动修改配置。")]),a._v(" "),r("li",[a._v("也就是说配置本身必须和服务一起发布，测试。")]),a._v(" "),r("li",[a._v("即使修改了很小的配置，和修改代码应视为同类改动，也要走持续构建流程。")])]),a._v(" "),r("h2",{attrs:{id:"持续构建要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#持续构建要求","aria-hidden":"true"}},[a._v("#")]),a._v(" 持续构建要求")]),a._v(" "),r("ul",[r("li",[a._v("把代码频繁签入构建分支，建议至少每天签入（为了避免代码提交历史数量众多和混乱，可以在团队中强制git rebase）")]),a._v(" "),r("li",[a._v("有一组测试来验证修改")]),a._v(" "),r("li",[a._v("构建失败时，团队需要以第一优先级修复CI")])]),a._v(" "),r("h2",{attrs:{id:"架构师需要专注在大方向上"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构师需要专注在大方向上","aria-hidden":"true"}},[a._v("#")]),a._v(" 架构师需要专注在大方向上")]),a._v(" "),r("ul",[r("li",[a._v("只在有限的情况下参与到非常具体的细节实现中来。")]),a._v(" "),r("li",[a._v("要保证系统不但能满足当前的需求，还能应对将来的变化。")])]),a._v(" "),r("h2",{attrs:{id:"系统长远目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统长远目标","aria-hidden":"true"}},[a._v("#")]),a._v(" 系统长远目标")]),a._v(" "),r("ul",[r("li",[a._v("可以设置一个显示屏，显示基于数据统计的进程。")]),a._v(" "),r("li",[a._v("如用户数，订单数，热门搜索，甚至是营收等关键指标，跟公司战略目标结合，可以明确方向，鼓舞士气。")])]),a._v(" "),r("p",[a._v("声明：")]),a._v(" "),r("p",[a._v("上述观点只是一些行业通用做法总结，更多的是一些个人思考，并不是金科玉律，意在抛砖引玉。")])])},[],!1,null,null,null);t.default=_.exports}}]);