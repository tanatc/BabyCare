let vm=new Vue({
	/*directives:{
		color(el){
			console	
		}
	},*/
	el:'#app',
	data:{
		todos:[
		{isSelected:false,title:'eating'},
		{isSelected:false,title:'sleeping'},
		],
		title:'',
		cur:'',
		hash:''
	},
	created(){//ajax获取 初始化数据
		//如果localStorage中有数据就用有的数据  没有数据就用默认的
		this.todos=JSON.parse(localStorage.getItem('data'))||this.todos;
		//监控hash值得变化
		this.hash=window.location.hash.slice(2)||'all';
		window.addEventListener('hashchange',()=>{
			this.hash=window.location.hash.slice(2);
		},false);
	},
	watch:{
		todos:{
			handler(){
				//localStorage默认存的字符串
				localStorage.setItem('data',JSON.stringify(this.todos));
			},deep:true
		}
	},
	methods:{
		add(){
			this.todos.push({
				isSelected:false,
				title:this.title
			});
			this.title='';
		},
		remove(todo){
			//拿到当前点击的和数组比对，相等则返回false即可
			this.todos=this.todos.filter(item=>item!==todo);
		},
		remember(todo){
			this.cur=todo;
		},
		cancel(){
			this.cur='';
		}
	},
	computed:{
		count(){
			return this.todos.filter(item=>!item.isSelected).length;
		},
		filterTodos(){
			if(this.hash==='all') return this.todos;
			if(this.hash==='finish') return this.todos.filter(item=>item.isSelected);
			if(this.hash==='unfinish') return this.todos.filter(item=>!item.isSelected);
			return this.todos;
		}
	}
});
