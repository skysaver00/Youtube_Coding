# Youtube_Coding 유튜브 클론 코딩
   
## 2.0 package.json은 반드시 소문자로 작성해야한다.
   
## 2.1 express 를 설치하면 package-lock, node_modules이 생긴다.
node_modules는 npm으로 설치한 모든 패키지가 저장된다.   
express는 다른 패키지도 필요하다. express는 혼자서 작동하지 않기 때문이다.   
node_modules를 보면 다른 애들도 같이 설치된 것을 볼 수 있다.   
**이들은 express를 쓸 수 있게 같이 설치된 애들이다. 따라서 npm i express를 실행하면 express를 설치, express의 dependencies도 같이 설치된다.**   
express의 dependencies에서도 또 dependencies가 있기 때문에 이들도 다운을 받는다.   
이들을 모아둔 곳이 node_modules이라는 것. 체인처럼 연결되어 있다.   
   
## 2.2 package.json은 우리의 프로젝트를 동작시킬 대 어떤 모듈들이 설치가 되는지에 대한 정보를 담고있다.
npm은 package.json을 보고 필요한 패키지를 설치하게 된다.   
**컴퓨터를 바꿔도 상관이 없이, package.json만 있으면 어디서든 설치가 가능하다. node_module, package-lock은 필요가 없다.**   
package.json에 설치 정보가 모두 들어있으니까, npm i만 하면 되는 것이다.   
package-lock.json은 내 패키지를 안전하게 관리한다. 패키지가 수정됬는지 해시 값 등으로 확인한다. 말 그대로 lock되있는 것.   
다른 사람이 이 package-lock으로 설치를 하면, 그 사람도 나와 같은 패키지를 설치한다. 이를 관리할 필요 없이 npm이 알아서 해준다.   
다만 node_modules, package-lock.json은 .gitignore로 github에 올라가지 않게 해주자.   
npm install을 할때는 package.json을 자동으로 수정하기 때문에 꼭 package.json을 닫고 npm install을 해주자.   
   
## 2.3 babel은 자바스크립트 컴파일러이다.
node.JS는 작성한 자바스크립트를 이해하지만, 최신 자바스크립트는 이해하지 못할 수 있다.   
따라서 node.JS가 이해하는 자바스크립트만 쓰거나, babel을 쓰는 것이다.   
**babel을 사용하면 node.js가 자바스크립트를 문제없이 완벽하게 이해하게 해석해준다.**   
따라서 모두가 이해할 수 있는 자바스크립트로 바꿔준다는 것이다. node.js가 이해하지 못할 걱정이 사라진다.   
--save-dev는 devDependencies의 패키지를 설치해준다.   
dependencies든, devDependencies든 모두 node_modules 폴더에 설치가 된다. 따라서 패키지를 어디에 두든 상관은 없다.   
--save-dev를 쓰지 않고 설치하면, dependencies에 패키지가 입력이 될 것이다.
**하지만,** 이 구분은 어떤 패키지가 어떤 일을 하는지 구분해주기 위해 따로 쓰는 것이다.   
**devDependencies는 우리와 같은 개발자를 위해 필요한 패키지를 모아둔 곳이다.**   
**dependencies는 우리의 프로젝트가 작동하는데 필요한 패키지를 모아둔 곳이다.**   
babel.config.json은 preset을 작성한다. preset는 babel을 위한 플러그인이다.   
preset-env는 최신 자바스크립트를 이용할 수 있게 해준다.
   
## 2.4 babel-node index.js는 node.js가 돌아가면서 babel도 같이 적용되서 실행이 되게 해준다.
이렇게 해서 최신 자바스크립트를 실행할 수 있다.   
npm run dev해서 실행해주면 된다.   
지금까지는 내가 코드를 수정할 때마다 다시 코드를 실행시켜야 했다.
저장하고 다시 실행해야한다. 이렇게 하면 매우 귀찮기 때문에 **nodemon**을 쓸 것이다.
파일이 수정되면 nodemon이 모든걸 다시 실행시켜준다.   
--exec옵션 뒤에 babel-node를 두면 된다. 이제 콘솔이 죽지않고 nodemon이 자동드로 다시 시작시켜 준다.   
또한 babel-node가 node를 대신하고 있다. 이제 매번 npm을 할 필요가 없어진다.   

## 3.0 src라는 파일을 만들어 자바스크립트 파일을 넣으면 이제 script의 위치도 고쳐야한다.
서버는 항상 켜져있는 컴퓨터이다. 인터넷에 연결되있다. 그리고 **request**를 받는다.   
request는 웹 사이트에 접속하는 것을 뜻한다. google.com에 접속하면 google.com에 request를 보낸 것이다.   
따라서 서버는 항상 주목하고 있다. request가 올때마다 24/7 반응을 하고 있는 것이다.   
**따라서 서버는 항상 듣고 답하는 일을 한다. 서버는 사용자를 기다리고 있다!**   
Express에서 Callback이란 자바스크립트에서 버튼처럼 addEventListener 처럼 버튼을 클릭하게 되면 작동하는 것처럼,   
서버가 시작될때 작동하는 함수이다.   
처음에 서버를 만들게 되면 Cannot GET / 라고 뜨는데, 어쨌든 서버에게 request를 보내고, 응답을 보낸 것이다.   
   
## 3.1 서버는 만들어졌고, 듣고 답을 하고 있지만, 아무것도 하지 못하고 있다...
Cannot GET / 에서 /는 서버의 root, 첫 페이지를 뜻한다. google.com에 접속하면 google.com === google.com/과 같은말이다.  
localhost:4000/이란 뜻이다. localhost:4000/javascript라고 접속하면 Cannot GET /javascript라고 뜨게 된다.    
GET는 http method를 뜻한다. http는 서버와 소통하는 방법이다. 가장 오래되고, 많이 사용하는 방법이다.   
우리가 웹 사이트에 접속하려 할때, 브라우저가 대신해서 http request를 만들어서 보낸다.   
http에서 GET는 **페이지를 갖다 줘** 라는 뜻이다. localhost:4000/에 접속할때, 페이지를 가져다 달라는 뜻이다.
아무것도 안했지만 브라우저는 기본적으로 GET를 하려 한다. 하지만 GET과 관련된 내용이 서버에서 없었기 때문에 응답을 하지 못하는 것이다.   
따라서 Cannot GET / 이 뜬 이유이다.   
**따라서 응답을 잘 해줘야 한다.**   
   
## 3.2 Request, 요청은 유저가 무언가를 요청하거나, 보냈거나, 어떤 행동을 하는 것을 뜻한다.
브라우저가 홈페이지를 Request하고 있는 것이다. 그리고 Cannot GET / 가 뜨는 것.   
app.get를 통해 서버에서 get 요청에 응답해줄 수 있고, 브라우저는 사용자에게 request를 보내게 된다.  
서버는 이제 get request에 반응할 수 있다. 하지만 브라우저는 기다리고 있는데, 응답을 해주지 않아서 무한으로 로딩되게 된다.   
request는 **브라우저가 URL을 요청하는 것**이다.   
하지만 console.log()만 해주기 때문에 응답이 없어 계속 무한 반복이라고 생각하면 된다.   
사용자가 원하는 걸 요청할때, **사용자가 직접 get request하는 것**이 아니고, **브라우저가 get request를 보낸다고 생각하면 된다.**   
   
## 3.3 Argument로 request object, response object를 선언해서 handle할 수 있다.
home으로 get request가 오면, express는 home에다가 request, response object를 넣어준다. 이게 express가 해주는 일이다.   
사용자는 request를 받는다 -> 브라우저는 request를 보내게 된다. -> root 페이지에 대한 request를 받으면 응답해주면 된다.
따라서 사용자는 **request를 보내고, response를 받고**, 서버는 **request를 받고, response를 보내주고** 해주면 된다.   
   
## 3.4 Express는 크개 3개의 기능을 가지고 있다. request, response가 대표적이다. response에는 cookie등도 있다.
res.send()를 통해 html이나, 텍스트등을 보낼 수 있다.   
Express는 request, response, router등 이 3가지로 모든 작업을 해낼 수 있다. router는 app.get()이 대표적이다.   
router는 URL등을 정리해주는 것이다.   
**Express는 request를 받고 response해주는 것이라는 것을 명심하자.** 이걸로 html, json, 텍스트 모두를 보낼 수 있다.   
   
## 3.5 Middleware는 중간에 있는 소프트웨어라는 뜻이다. 무엇의 중간에 있는가?가 중요하다.
**Middleware는 request와 response의 사이에 있다.**   
**브라우저가 request하고난 뒤, 서버가 response하기 전에 그 사이에 Middleware가 있는 것이다.**   
모든 Middleware는 handler이고, 모든 handler는 Middleware이다. handler === controller이다. MVC패턴을 기억하자.   
controller에는 req, res말고 next라는 다른 파라미터가 존재한다.   
res.end()대신 next()를 사용하면, Express가 handleHome의 다음의 함수를 호출한다.   
브라우저는 홈페이지를 가져오려 한다. -> gossipMiddleware를 호출한다 -> console.log()실행뒤, next()함수 호출 -> 다음 함수인 handleHome 호출.   
이렇게 되면 handleHome는 Finalware가 된다.   
**모든 controller가 Middleware가 될 수 있다.**   
Express가 request를 확인하면 handler를 호출하게 된다. -> 두개의 handler가 있고 하나는 Middleware인 것이다.   
handleHome 다음에는 아무것도 없으니까 Finalware가 된다. 따라서 ***next 함수를 호출해야 Middleware라는 것을 알 수 있다.***
당연히 return을 보면 다음 줄 부터는 실행을 하지 않는다.   
**Middleware는 request에 응답하지 않는다. request를 지속시켜주는데, 그 사이에 무언갈 하고, 다음 함수에게 넘기는 함수이다.**   
**request에 응답하게 되면 Finalware가 된다.**

## 3.6 app.get()말고, app.use()도 있다!
**app.use()는 global Middleware를 만들 수 있게 해준다.**   
Middleware를 use하는게 먼저, 그다음의 URL의 get이 와야한다.   
이렇게 하면 URL로 접속하면 Middleware가 작동되게 만들어준다!   
request가 오면, Express는 모든 것을 위에서 아래 순으로 실행시켜준다. Javascript처럼 실행시켜준다.   
Express는 우선, request를 받으면 Middleware를 출력하고, app.get()를 실행시켜준다.  
app.get다음 app.use가 나오면 app.get의 URL로 접속하면 출력이 되지 않는다.   
**순서는 큰 영향을 미치니까 매우 중요하다.**   
**이를 응용하면 Middleware를 이용해서 어떤 경우에는 next로, 어떤 경우에는 접속을 제한하는 경우의 로직을 만들 수 있다.**   
Middleware는 Controller로든, Middleware로든 모두 작동이 가능하니까 이런 로직을 만들 수 있다.   

# 3.7 ~ 3.11 RECAP
## 3.7 Setup RECAP
#### package.json은 node.js 관련 정보를 담는 방법이다. 그냥 text이기 때문에 그냥 넣어도 상관 없다.
#### 다만 package.json의 어떤 Object를 넣으면 npm이 어떤 행동을 할 수 있게 해주는 것이 있다. 대표적으로 script가 있다.
#### script를 넣어줌으로써 npm run dev등을 돌릴 수 있다.
#### dependencies는 프로젝트가 돌아가기 위해 필요한 package이다. dependencies는 Express등이 들어가서 서버로 작동할 수 있게 만들어 준다.
#### npm install express를 입력하면 npm이 express를 다운받고 버전 정보를 확인해서 정보를 추가한다.
#### node_module에 설치가 된다. node_module을 공유할 필요없이 package.json만 주면 자동으로 필요한 것들을 설치하게 된다.
#### devDependencies와 dependencies의 차이는 개발자가 필요로 하는지, 해당 프로젝트에게 필요한지 구분하기 위하 체계적으로 나눠둔 것이다.
#### 둘 다 node_module에 설치되는 것은 똑같다.
#### babel-node를 사용하려면 babel.config.json에 babel에 추가하고 싶은 플러그인을 추가해야 한다.
#### 예를들어 최신 javascript를 사용하게 해주는 preset-env를 사용하기 위해 preset 플러그인을 추가하면 된다.
   
   
## 3.8 Server RECAP
#### 서버는 항상 켜져있고, 인터넷에 연결되있고, request를 받는 컴퓨터이다.
#### 내가 naver.com을 가려고 하면, 브라우저가 naver.com에 request를 보내는 것이다. 그럼 naver.com 서버가 response를 보내주는 것이다.
#### 사용자는 브라우저를 통해 request를 보내게 된다.
#### 사용자의 행동을 listening하는 서버만 request를 보낼 수 있다. 따라서 서버는 해당 동작을 할 수 있게 개발자가 만들어 줘야 한다.
#### import express from "express"를 통해 Express를 가져온다.
#### app변수를 만들어 express함수를 호출한다. 그럼 바로 express를 사용할 수 있게된다.
#### 서버에서 모든 포트에 대해 listen할 수 없기 때문에 app.listen으로 특정 PORT를 들을 수 있게 해줘야 한다.
#### PORT는 창문과 같은 개념이다. PORT 4000은 4000번째 창문이라고 생각하면 되고, request를 보낼때 해당 포트로 request를 보내는 것이다.
#### request를 전달하려면 URL을 사용해야한다. 여기서 app.get()가 사용된다.
#### 이 URL의 모음을 routes라고 부른다.
#### http의 method는 get, post, delete등이 있다.
#### app.get()에는 URL, handler가 필요하다.
   
   
## 3.8 Controller RECAP
#### controller에는 request와 response가 반드시 있어야 한다. Middleware의 경우 next도 있을 수 있다.
#### Express API에서 모든 method를 확인할 수 있다. <https://expressjs.com/en/api.html>
#### response에는 대표적으로 send, end, redirect method등이 있다.
#### Arrow function에는 기본적으로 return이 포함되어있다.
#### req는 request에 대한 정보를 주고, res에는 request에 어떻게 응답하는지의 정보가 담겨있다.
#### **뭐가 됬든 request에는 response가 필요하다.**
#### 따라서 route를 만들고 controllers를 만드는 것이 필요하다.
#### 이 controller에서 로그인, 로그아웃, 업로드, 다운로드 모든 것을 할 수 있다.
#### req, res가 아니어도 상관은 없다. x, y라는 이름이어도 상관없고, 위치가 중요한 것이다.
#### 첫번째는 request, 두번째는 response, 세번째 이후는 next라는 것을 알고있으면 된다.