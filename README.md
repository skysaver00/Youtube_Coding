# Youtube_Coding 유튜브 클론 코딩
   
## 2.0 package.json은 반드시 소문자로 작성해야한다.
   
## 2.1 express 를 설치하면 package-lock, node_modules이 생긴다.
node_modules는 npm으로 설치한 모든 패키지가 저장된다.   
express는 다른 패키지도 필요하다. express는 혼자서 작동하지 않기 때문이다.   
node_modules를 보면 다른 애들도 같이 설치된 것을 볼 수 있다.   
이들은 express를 쓸 수 있게 같이 설치된 애들이다. 따라서 npm i express를 실행하면 express를 설치, express의 dependencies도 같이 설치된다.   
express의 dependencies에서도 또 dependencies가 있기 때문에 이들도 다운을 받는다.   
이들을 모아둔 곳이 node_modules이라는 것. 체인처럼 연결되어 있다.   
   
## 2.2 package.json은 우리의 프로젝트를 동작시킬 대 어떤 모듈들이 설치가 되는지에 대한 정보를 담고있다.
npm은 package.json을 보고 필요한 패키지를 설치하게 된다.   
컴퓨터를 바꿔도 상관이 없이, package.json만 있으면 어디서든 설치가 가능하다. node_module, package-lock은 필요가 없다.   
package.json에 설치 정보가 모두 들어있으니까, npm i만 하면 되는 것이다.   
package-lock.json은 내 패키지를 안전하게 관리한다. 패키지가 수정됬는지 해시 값 등으로 확인한다. 말 그대로 lock되있는 것.   
다른 사람이 이 package-lock으로 설치를 하면, 그 사람도 나와 같은 패키지를 설치한다. 이를 관리할 필요 없이 npm이 알아서 해준다.   
다만 node_modules, package-lock.json은 .gitignore로 github에 올라가지 않게 해주자.   
npm install을 할때는 package.json을 자동으로 수정하기 때문에 꼭 package.json을 닫고 npm install을 해주자.   
   
## 2.3 