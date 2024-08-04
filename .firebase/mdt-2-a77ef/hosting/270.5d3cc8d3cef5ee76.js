"use strict";(self.webpackChunkatrio=self.webpackChunkatrio||[]).push([[270],{1270:(W,v,i)=>{i.r(v),i.d(v,{TaskModule:()=>X});var d=i(6895),l=i(4006),h=i(4365),f=i(9116),c=i(1206),t=i(4650),N=i(529),g=i(4859),Z=i(7392),u=i(9549),x=i(4385),U=i(3238),A=i(6709),C=i(4144),J=i(266),p=i(9602),T=i(3267);function F(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(),r=t.MAs(20);return t.KtG(a.deleteTask(r))}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}function _(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"button",44),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.saveTask())}),t.TgZ(1,"mat-icon"),t._uU(2,"save"),t.qZA()()}}function b(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"button",45),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.editTask())}),t.TgZ(1,"mat-icon"),t._uU(2,"save"),t.qZA()()}}function y(e,s){1&e&&t._UZ(0,"div",58)}function M(e,s){1&e&&(t.TgZ(0,"mat-icon",59),t._uU(1,"arrow_downward "),t.qZA())}function D(e,s){1&e&&(t.TgZ(0,"mat-icon",60),t._uU(1,"arrow_upward "),t.qZA())}function Q(e,s){1&e&&(t.TgZ(0,"mat-icon",61),t._uU(1," remove"),t.qZA())}const I=function(e){return{done:e}},H=function(e,s,o){return{"task-low":e,"task-high":s,"task-normal":o}};function S(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"div",46),t.NdJ("click",function(){const r=t.CHM(o).$implicit,m=t.oxw(),k=t.MAs(20);return t.KtG(m.taskClick(r,k))}),t.TgZ(1,"div")(2,"div",47)(3,"mat-icon",48),t._uU(4,"drag_indicator"),t.qZA()()(),t.TgZ(5,"mat-checkbox",49),t.NdJ("change",function(){const r=t.CHM(o).$implicit,m=t.oxw(),k=t.MAs(20);return t.KtG(m.toggle(r,k))}),t.qZA(),t.YNc(6,y,1,0,"div",50),t.TgZ(7,"div",51),t._uU(8),t.qZA(),t.TgZ(9,"div",52),t.YNc(10,M,2,0,"mat-icon",53),t.YNc(11,D,2,0,"mat-icon",54),t.YNc(12,Q,2,0,"mat-icon",55),t._uU(13),t.qZA(),t._UZ(14,"img",56),t.TgZ(15,"div",57),t._uU(16),t.ALo(17,"date"),t.qZA()()}if(2&e){const o=s.$implicit;t.xp6(5),t.Q6J("checked",!!o.done),t.xp6(2),t.Q6J("ngClass",t.VKq(13,I,o.done)),t.xp6(1),t.hij(" ",o.title,""),t.xp6(1),t.Q6J("ngClass",t.kEZ(15,H,"Low"===o.priority,"High"===o.priority,"Normal"===o.priority)),t.xp6(1),t.Q6J("ngIf","Low"===(null==o?null:o.priority)),t.xp6(1),t.Q6J("ngIf","High"===(null==o?null:o.priority)),t.xp6(1),t.Q6J("ngIf","Normal"===(null==o?null:o.priority)),t.xp6(1),t.hij(" ",o.priority," "),t.xp6(1),t.s9C("src",o.img,t.LSH),t.s9C("matTooltip",o.name),t.xp6(2),t.Oqu(t.lcZ(17,11,o.due_date))}}const E=[{path:"",component:(()=>{class e{constructor(o,n){this.fb=o,this.http=n,this.mode=new l.p4("side"),this.showFiller=!1,this.isNewEvent=!1,this.tasks=[],this.breadscrums=[{title:"Tasks",items:["Home"],active:"Tasks"}],this.taskForm=this.createFormGroup({}),this.fetch(r=>{this.tasks=r})}fetch(o){const n=new XMLHttpRequest;n.open("GET","assets/data/task.json"),n.onload=()=>{const a=JSON.parse(n.response);o(a)},n.send()}drop(o){(0,c.bA)(this.tasks,o.previousIndex,o.currentIndex)}toggle(o,n){n.close(),o.done=!o.done}addNewTask(o){this.resetFormField(),this.isNewEvent=!0,this.dialogTitle="New Task",this.userImg="assets/images/user/user1.jpg",o.open()}taskClick(o,n){this.isNewEvent=!1,this.dialogTitle="Edit Task",this.userImg=o.img,n.open(),this.taskForm=this.createFormGroup(o)}closeSlider(o){o.close()}createFormGroup(o){return this.fb.group({id:[o?o.id:this.getRandomID()],img:[o?o.img:"assets/images/user/user1.jpg"],name:[o?o.name:null],title:[o?o.title:null],done:[o?o.done:null],priority:[o?o.priority:null],due_date:[o?o.due_date:null],note:[o?o.note:null]})}saveTask(){this.tasks.unshift(this.taskForm.value),this.resetFormField()}editTask(){const o=this.tasks.map(n=>n.id).indexOf(this.taskForm.value.id);this.tasks[o]=this.taskForm.value}deleteTask(o){const n=this.tasks.map(a=>a.id).indexOf(this.taskForm.value.id);this.tasks.splice(n,1),o.close()}resetFormField(){this.taskForm.controls.name.reset(),this.taskForm.controls.title.reset(),this.taskForm.controls.done.reset(),this.taskForm.controls.priority.reset(),this.taskForm.controls.due_date.reset(),this.taskForm.controls.note.reset()}getRandomID(){const o=()=>65536*(1+Math.random())|0;return o()+o()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.QS),t.Y36(N.eN))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-task"]],decls:102,vars:21,consts:[[1,"content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12","col-sm-12"],[1,"card","h-100"],[1,"card-body"],[1,"task-module"],[1,"task-header"],[1,"task-title"],[1,"header-button"],["mat-raised-button","","color","primary",3,"click"],[1,"task-container"],["position","end",3,"mode"],["sidenav",""],[1,"header"],[1,"header-title"],[1,"header-close","m-r-0"],["mat-icon-button","","matTooltip","Delete Task",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Save Task",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Edit Task",3,"click",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"register-form","m-4",3,"formGroup"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[3,"hidden"],["matInput","","formControlName","id"],["matInput","","formControlName","img"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","title"],["matSuffix","",1,"material-icons-two-tone","color-icon","p-3"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["formControlName","done","color","primary",1,"example-margin"],["formControlName","name"],[3,"value"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-2"],["formControlName","priority"],["matInput","","formControlName","due_date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["matInput","","formControlName","note"],[1,"col-xl-10","col-lg-10","col-md-12","col-sm-12"],["visibility","hover",2,"height","500px"],["cdkDropList","",1,"task-list",3,"cdkDropListDropped"],["class","task-box","cdkDrag","",3,"click",4,"ngFor","ngForOf"],["mat-icon-button","","matTooltip","Delete Task",3,"click"],["mat-icon-button","","matTooltip","Save Task",3,"click"],["mat-icon-button","","matTooltip","Edit Task",3,"click"],["cdkDrag","",1,"task-box",3,"click"],["cdkDragHandle","",1,"task-handle","m-r-20"],["aria-hidden","false"],["color","primary",1,"m-r-15",3,"checked","change"],["class","task-custom-placeholder",4,"cdkDragPlaceholder"],["matTooltip","Title",3,"ngClass"],[3,"ngClass"],["matTooltip","Low","aria-hidden","false","class","lbl-low",4,"ngIf"],["matTooltip","High","aria-hidden","false","class","lbl-high",4,"ngIf"],["matTooltip","Normal","aria-hidden","false","class","lbl-normal",4,"ngIf"],[1,"task-user-img",3,"src","matTooltip"],["matTooltip","Due Date",1,"task-date"],[1,"task-custom-placeholder"],["matTooltip","Low","aria-hidden","false",1,"lbl-low"],["matTooltip","High","aria-hidden","false",1,"lbl-high"],["matTooltip","Normal","aria-hidden","false",1,"lbl-normal"]],template:function(o,n){if(1&o){const a=t.EpF();t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"h2"),t._uU(10,"Tasks"),t.qZA(),t.TgZ(11,"h5"),t._uU(12),t.qZA()(),t.TgZ(13,"div",9)(14,"button",10),t.NdJ("click",function(){t.CHM(a);const m=t.MAs(20);return t.KtG(n.addNewTask(m))}),t._uU(15,"Add Task"),t.qZA()()(),t.TgZ(16,"div",2)(17,"div",3)(18,"mat-sidenav-container",11)(19,"mat-sidenav",12,13)(21,"div",14)(22,"h2",15),t._uU(23),t.qZA(),t.TgZ(24,"div",16),t.YNc(25,F,3,0,"button",17),t.YNc(26,_,3,0,"button",18),t.YNc(27,b,3,0,"button",19),t.TgZ(28,"button",20),t.NdJ("click",function(){t.CHM(a);const m=t.MAs(20);return t.KtG(n.closeSlider(m))}),t.TgZ(29,"mat-icon"),t._uU(30,"close"),t.qZA()()()(),t.TgZ(31,"form",21)(32,"div",2)(33,"div",22)(34,"mat-form-field",23),t._UZ(35,"input",24),t.qZA()()(),t.TgZ(36,"div",2)(37,"div",22)(38,"mat-form-field",23),t._UZ(39,"input",25),t.qZA()()(),t.TgZ(40,"div",2)(41,"div",22)(42,"mat-form-field",26)(43,"mat-label"),t._uU(44,"Title"),t.qZA(),t._UZ(45,"input",27),t.TgZ(46,"mat-icon",28),t._uU(47,"turned_in_not "),t.qZA()()()(),t.TgZ(48,"div",2)(49,"div",29)(50,"mat-checkbox",30),t._uU(51,"Mark as complete "),t.qZA()()(),t.TgZ(52,"div",2)(53,"div",29)(54,"mat-form-field",26)(55,"mat-label"),t._uU(56,"Assigned Name"),t.qZA(),t.TgZ(57,"mat-select",31)(58,"mat-option",32),t._uU(59," Sarah Smith "),t.qZA(),t.TgZ(60,"mat-option",32),t._uU(61," John Deo "),t.qZA(),t.TgZ(62,"mat-option",32),t._uU(63," Jens Brincker "),t.qZA(),t.TgZ(64,"mat-option",32),t._uU(65," Mark Hay "),t.qZA(),t.TgZ(66,"mat-option",32),t._uU(67," Anthony Davie "),t.qZA(),t.TgZ(68,"mat-option",32),t._uU(69," Sue Woodger "),t.qZA()()()()(),t.TgZ(70,"div",2)(71,"div",33)(72,"mat-form-field",26)(73,"mat-label"),t._uU(74,"Priority"),t.qZA(),t.TgZ(75,"mat-select",34)(76,"mat-option",32),t._uU(77," Low "),t.qZA(),t.TgZ(78,"mat-option",32),t._uU(79," Normal "),t.qZA(),t.TgZ(80,"mat-option",32),t._uU(81," High "),t.qZA()()()(),t.TgZ(82,"div",33)(83,"mat-form-field",26)(84,"mat-label"),t._uU(85,"Due date"),t.qZA(),t._UZ(86,"input",35)(87,"mat-datepicker-toggle",36)(88,"mat-datepicker",null,37),t.qZA()()(),t.TgZ(90,"div",2)(91,"div",22)(92,"mat-form-field",26)(93,"mat-label"),t._uU(94,"Event Details"),t.qZA(),t._UZ(95,"textarea",38),t.qZA()()(),t.TgZ(96,"div",2),t._UZ(97,"div",39),t.qZA()()(),t.TgZ(98,"mat-sidenav-content")(99,"ng-scrollbar",40)(100,"div",41),t.NdJ("cdkDropListDropped",function(m){return n.drop(m)}),t.YNc(101,S,18,19,"div",42),t.qZA()()()()()()()()()()()()()}if(2&o){const a=t.MAs(89);t.xp6(12),t.hij("",n.tasks.length," Total task"),t.xp6(7),t.Q6J("mode",n.mode.value),t.xp6(4),t.Oqu(n.dialogTitle),t.xp6(2),t.Q6J("ngIf",!n.isNewEvent),t.xp6(1),t.Q6J("ngIf",n.isNewEvent),t.xp6(1),t.Q6J("ngIf",!n.isNewEvent),t.xp6(4),t.Q6J("formGroup",n.taskForm),t.xp6(3),t.Q6J("hidden",!0),t.xp6(4),t.Q6J("hidden",!0),t.xp6(20),t.Q6J("value","Sarah Smith"),t.xp6(2),t.Q6J("value","John Deo"),t.xp6(2),t.Q6J("value","Jens Brincker"),t.xp6(2),t.Q6J("value","Mark Hay"),t.xp6(2),t.Q6J("value","Anthony Davie"),t.xp6(2),t.Q6J("value","Sue Woodger"),t.xp6(8),t.Q6J("value","Low"),t.xp6(2),t.Q6J("value","Normal"),t.xp6(2),t.Q6J("value","High"),t.xp6(6),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(14),t.Q6J("ngForOf",n.tasks)}},dependencies:[d.mk,d.sg,d.O5,l._Y,l.Fj,l.JJ,l.JL,h.KC,g.lW,g.RK,Z.Hw,u.KE,u.hX,u.R9,x.gD,U.ey,A.oG,C.Nt,J.gM,p.Mq,p.hl,p.nW,l.sg,l.u,T.JX,T.TM,T.Rh,c.Wj,c.Zt,c.Bh,c.Hk,d.uU]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(E),f.Bz]}),e})();var L=i(8255),G=i(1948),w=i(7009),K=i(671),Y=i(8739),j=i(3546),R=i(6308),O=i(3683),B=i(5626);let X=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,l.u5,h.kb,q,g.ot,Z.Ps,x.LD,A.p9,C.c,J.AV,p.FA,l.u5,l.UX,u.lN,G.Fk,L.Tx,w.ZX,T.SJ,K.p0,Y.TU,j.QW,R.JX,O.g0,c._t,B.K]}),e})()}}]);