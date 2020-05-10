# gn_node_3
## bitnami https://bitnami.com/ > apache mysql php server
## community > wamp 검색 https://bitnami.com/stack/wamp
## zend framework 만 설치
## bitnami 기본포트 : 80
## mysql 기본포트 :3306
## launch wampstack in the cloud with Bitnami 체크해제
## 127.0.0.1:80 접속
## C:\Bitnami\wampstack-7.3.17-1\manager-windows.exe
## manage.server 탭 > 개발안할때는 두개 다 끄면됨 > apache server stop

## heidisql 설치 https://www.heidisql.com/
## https://www.heidisql.com/download.php
## image 폴더 01.png 대로 입력하고 비밀번호 000000 > 저장 버튼 클릭 > 열기 클릭
## 보안문제 걸리면 'mysql8 원격접속 허용 검색' https://hhhhhhhong.tistory.com/17
```bash
sudo mysql -u root -p password
create user 'root'@'%' identified by 'password';
grant all privileges on *.* to 'root'@'%';
flush privileges;
```
```cmd
C:\Bitnami\wampstack-7.3.17-1\mysql\bin>mysql -u root -p
000000
create user 'root'@'%' identified by 'password';
grant all privileges on *.* to 'root'@'%';
```
## heidisql에서 우클릭 > 새로생성 > 데이터베이스 > node
## node > 우클릭 테이블 생성 > 테이블이름 sample > 추가 버튼 세번 클릭
## image 폴더 02.png 대로 생성후 쿼리탭
```sql
INSERT INTO sample(username, age, comment, created)
VALUES('홍길동', 20, '아버지를 아버지라...', '2020-05-03 12:40:50');

INSERT INTO sample SET
username = '홍길순',
age = 25,
comment = '어머니를 어머니라...',
created = '2020-05-03 12:42:50';
```
```cmd
npm i mysql2
npm i moment
```
## mysql : callback version, mysql2 : promise version

### AWS 라이트세일?
### notion.so?
### templated.co

# .gitignore에 다음 세개는 필수!!
## /node_modules
## .vscode
## .idea
