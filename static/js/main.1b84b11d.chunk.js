(this.webpackJsonpmathworx3=this.webpackJsonpmathworx3||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(7),s=n.n(i),c=(n(13),n(3)),o=n(4),d=n(1),u=n(6),b=n(5),m=(n(14),n(0)),l=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={additionTerm:0},a.inputUpdated=a.inputUpdated.bind(Object(d.a)(a)),a.submitAdditionterm=a.submitAdditionterm.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"inputUpdated",value:function(e){var t=e.target.value;this.setState({additionTerm:t})}},{key:"submitAdditionterm",value:function(e){e.preventDefault(),(0,this.props.onSubmit)(this.state.additionTerm)}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"add-form",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{htmlFor:"addTerm",children:"Plus What?"}),Object(m.jsx)("input",{className:"form-control",type:"input",name:"addTerm",value:this.state.additionTerm,onChange:this.inputUpdated,pattern:"[0-9]*"}),Object(m.jsx)("button",{onClick:this.submitAdditionterm,className:"btn btn-success",children:"Let's Play"})]})})}}]),n}(a.Component);l.defaultProps={onSubmit:function(){}};var h=l,j=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={numberCorrect:0,baseNumber:0,inputTerm:0,numberSentence:"",answerResponse:""},a.submitAdditionAnswer=a.submitAdditionAnswer.bind(Object(d.a)(a)),a.createNumberSentence=a.createNumberSentence.bind(Object(d.a)(a)),a.getRandomBase=a.getRandomBase.bind(Object(d.a)(a)),a.inputUpdated=a.inputUpdated.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"inputUpdated",value:function(e){var t=e.target.value;this.setState({inputTerm:t})}},{key:"createNumberSentence",value:function(){var e=this.getRandomBase(),t=e.toString()+" + "+this.props.additionTerm.toString()+" = ? ";this.setState({baseNumber:e,numberSentence:t})}},{key:"componenetDidCatch",value:function(e,t){console.log(e,t)}},{key:"componentDidUpdate",value:function(e){e.additionTerm!==this.props.additionTerm&&this.createNumberSentence()}},{key:"submitAdditionAnswer",value:function(e){e.preventDefault();var t=parseInt(this.state.baseNumber),n=parseInt(this.props.additionTerm);parseInt(this.state.inputTerm)===n+t?(this.setState({numberCorrect:this.state.numberCorrect+1,answerResponse:"Correctomundo"}),this.createNumberSentence()):this.setState({answerResponse:"Wrong answer dude."})}},{key:"getRandomBase",value:function(){return Math.floor(11*Math.random())}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"add-game",children:[Object(m.jsxs)("form",{children:[Object(m.jsxs)("label",{htmlFor:"answer",children:[" ",this.state.numberSentence," "]}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"form-control",type:"input",value:this.state.inputTerm,onChange:this.inputUpdated,name:"answer",pattern:"[0-9]*"}),Object(m.jsx)("button",{onClick:this.submitAdditionAnswer,className:"btn btn-success",children:"Answer"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[this.state.answerResponse,Object(m.jsx)("br",{}),"Number Correct: ",this.state.numberCorrect]})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={addTerm:0},a.onFormSubmit=a.onFormSubmit.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"onFormSubmit",value:function(e){var t=e;this.setState({addTerm:t}),console.log(this.state)}},{key:"render",value:function(){var e=this.state.addTerm;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App-header",children:"MathWorx"}),"Addition",Object(m.jsx)(h,{onSubmit:this.onFormSubmit}),Object(m.jsx)(j,{additionTerm:e})]})}}]),n}(r.a.Component);s.a.render(Object(m.jsx)(p,{}),document.getElementById("root"));var O=p,v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.1b84b11d.chunk.js.map