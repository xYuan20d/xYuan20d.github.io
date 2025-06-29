"use strict";(self.webpackChunky_doc=self.webpackChunky_doc||[]).push([[4662],{2919:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"\u4f7f\u7528\u6559\u7a0b/python_api","title":"Python API","description":"Yuml \u7684 Python API \u6bd4\u8f83\u7b80\u6d01\u3002","source":"@site/docs/\u4f7f\u7528\u6559\u7a0b/PythonAPI.md","sourceDirName":"\u4f7f\u7528\u6559\u7a0b","slug":"/\u4f7f\u7528\u6559\u7a0b/python_api","permalink":"/docs/\u4f7f\u7528\u6559\u7a0b/python_api","draft":false,"unlisted":false,"editUrl":"https://github.com/xYuan20d/Yuml-doc/edit/main/docs/\u4f7f\u7528\u6559\u7a0b/PythonAPI.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Python API","id":"python_api"},"sidebar":"tutorialSidebar","previous":{"title":"\u4f7f\u7528\u6559\u7a0b","permalink":"/docs/useDoc"},"next":{"title":"\u57fa\u672c\u6982\u5ff5","permalink":"/docs/\u4f7f\u7528\u6559\u7a0b/concept"}}');var i=o(4848),l=o(8453);const r={sidebar_position:1,title:"Python API",id:"python_api"},s="\ud83d\udc0d Yuml Python API \u7b80\u4ecb",d={},c=[{value:"\ud83d\udccc \u6838\u5fc3\u63a5\u53e3\uff1a<code>LoadYmlFile</code>",id:"-\u6838\u5fc3\u63a5\u53e3loadymlfile",level:2},{value:"\ud83d\ude80 \u793a\u4f8b\u7528\u6cd5",id:"-\u793a\u4f8b\u7528\u6cd5",level:2},{value:"\ud83d\udcce \u6ce8\u610f\u4e8b\u9879",id:"-\u6ce8\u610f\u4e8b\u9879",level:2}];function a(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"-yuml-python-api-\u7b80\u4ecb",children:"\ud83d\udc0d Yuml Python API \u7b80\u4ecb"})}),"\n",(0,i.jsxs)(e.p,{children:["Yuml \u7684 Python API \u6bd4\u8f83\u7b80\u6d01\u3002",(0,i.jsx)(e.br,{}),"\n","\u5927\u591a\u6570\u529f\u80fd\u7531 Yuml \u7684 YAML \u811a\u672c\u9a71\u52a8\u5b8c\u6210\uff0cPython \u7aef\u4ec5\u63d0\u4f9b\u5165\u53e3\u7ea7\u5c01\u88c5\uff0c\u7528\u4e8e",(0,i.jsx)(e.strong,{children:"\u52a0\u8f7d YAML \u6587\u4ef6\u5e76\u542f\u52a8\u5e94\u7528"}),"\u3002"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.h2,{id:"-\u6838\u5fc3\u63a5\u53e3loadymlfile",children:["\ud83d\udccc \u6838\u5fc3\u63a5\u53e3\uff1a",(0,i.jsx)(e.code,{children:"LoadYmlFile"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"LoadYmlFile(\n    file_name: str,            # Yuml \u6587\u4ef6\u8def\u5f84\n    app: QApplication,         # Qt \u5e94\u7528\u5b9e\u4f8b\n    load_str: bool = False,    # \u662f\u5426\u4ee5\u5b57\u7b26\u4e32\u65b9\u5f0f\u52a0\u8f7d\u5185\u5bb9\uff08\u800c\u975e\u6587\u4ef6\u8def\u5f84\uff09\n    _p: QWidget | None = None  # \u7236\u7a97\u53e3\u5bf9\u8c61\uff08\u53ef\u9009\uff09\n    ...                        # \u8fd9\u91cc\u4e0d\u5c55\u793aYuml\u5e95\u5c42\u4ea4\u4e92\u53c2\u6570\n)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8be5\u51fd\u6570\u4f1a\u81ea\u52a8\u8bc6\u522b\u5e76\u6267\u884c YAML \u4e2d\u7684\u6839\u5757\uff0c\u5982 ",(0,i.jsx)(e.code,{children:"windowCreated"})," \u7b49\u3002"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-\u793a\u4f8b\u7528\u6cd5",children:"\ud83d\ude80 \u793a\u4f8b\u7528\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'from PySide6.QtWidgets import QApplication\nfrom os import environ\n\n# \u5fc5\u987b\u5728\u5bfc\u5165 Yuml \u524d\u8bbe\u7f6e\u7a97\u53e3\u6837\u5f0f\nenviron["__YuQt_WindowStyle"] = "YW_root"\n\nfrom YUML.Yuml import LoadYmlFile\n\napp = QApplication([])\n\n# \u52a0\u8f7d Yuml \u6587\u4ef6\u5e76\u8fd0\u884c\nLoadYmlFile("main.yaml", app)\n\n# \u6ce8\u610f\uff1a\u4e0d\u8981\u4f7f\u7528 app.exec()\n# Yuml \u5185\u90e8\u5df2\u96c6\u6210 Qt \u4e8b\u4ef6\u5faa\u73af\u7ba1\u7406\uff0c\u5efa\u8bae\u5728 YAML \u4e2d\u4f7f\u7528 $app::run \u4ee3\u66ff\uff01\n'})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-\u6ce8\u610f\u4e8b\u9879",children:"\ud83d\udcce \u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"LoadYmlFile"})," \u662f ",(0,i.jsx)(e.strong,{children:"Yuml \u4e0e Python \u7684\u6865\u6881\u5165\u53e3"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5efa\u8bae\u7edf\u4e00\u5728 ",(0,i.jsx)(e.code,{children:"main.yaml"})," \u4e2d\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"windowCreated"})," \u7b49\u4e8b\u4ef6\u5757\u8fdb\u884c\u521d\u59cb\u5316"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>s});var t=o(6540);const i={},l=t.createContext(i);function r(n){const e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);