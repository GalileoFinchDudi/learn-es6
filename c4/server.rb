# -*- coding: utf-8 -*-
inms_alarmserver_address '127.0.0.1:8080'
tomcat :app1 do 
  stdout true
  
  executor :shared, :min => 10, :max => 200
  #connector :http, 9022, :executor => :shared ,
  connector :http_nio, 8086, :executor => :shared, :acceptCount=> 200,:redirectPort => 9021
  connector :https_nio, 9021,:scheme => "https",:secure => true,:clientAuth => false,:sslProtocol => "TLS",:SSLEnabled => true,:maxThreads => 150,:keystoreFile => "/home/bmsnet/webjoin/conf/server.jks",:keystorePass => "eb123456",:ciphers => "TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA256"
  java_opts "-Xms1024m -Xmx8192m  -XX:PermSize=128m -XX:MaxPermSize=128m"
  #java_opts "-javaagent:/home/bmsnet/oneapm/oneapm.jar"
 #webapp '/docs' 
  webapp '/bms-net' do

        #fileSavePath
        env[:bmsMarketFile]="/home/bmsnet/bmsMarketFile/data/"
        env[:tempFile]="/home/bmsnet/bmsMarketFile/tempFile/"
        env[:uploadpath]="/home/bmsnet/bmsMarketFile/upload/"
        env[:ismpcUrl]="/home/bmsnet/webjoin/webapps/configHdh.ismpc.json"
        env[:phoneFile]="/home/bmsnet/bmsDesPath/phoneFile"
        env[:phoneRes]="/home/bmsnet/bmsDesPath/phoneRes"
        env[:fileImage]="/home/bmsnet/webjoin/image/app1/webapps/bms-net/ackfiles"
        env[:phoneFile2]="/home/bmsnet/bmsDesPath/phoneFile2"
        env[:phoneRes2]="/home/bmsnet/bmsDesPath/phoneRes2"
        env[:fileImage2]=" /home/bmsnet/webjoin/image/app1/webapps/bms-net/images/images"
        env[:baseUrl]= "http://hdh.10086.cn/grouppath"
        env[:ftpIp]=" 192.168.1.100"
        env[:ftpPort]="22"
        env[:ftpName]="ismp"
        env[:ftpPassword]="123@Abcd"
        env[:ftpUrl]=" /home/ismp/cmin02sms/filerun/working"
        env[:ftpFinishUrl]=" /home/ismp/cmin02sms/filerun/finish"
        env[:ftpIp2]="192.168.1.29"
        env[:ftpPort2]="22"
        env[:ftpName2]="ismp"
        env[:ftpPassword2]="123@Abcd"
        env[:ftpUrl2]=" /home/ismp/cmin02sms/filerun/working"
        env[:ftpFinishUrl2]=" /home/ismp/cmin02sms/filerun/finish"
        env[:voiceUrl]=" http://hdh.10086.cn/voices"
        env[:textvoices]=" /home/ykdhweb/webjoin/data/ringwav"
        env[:ftpVarTaskUrl]="/home/ismp/cmin02sms/commshelldata"
        env[:ftpVarTaskUrl2]="/home/ismp/cmin02sms/commshelldata"
        env[:serverval]="ykdh.10086.cn:9021;hdh.10086.cn:9021;10.154.17.5:9021"
        env[:orders1]="/home/ bmsnet /bmsMarketFile/orders1/"
        env[:orders2]="/home/ bmsnet/bmsMarketFile/orders2/"
	#免登地址
	env[:newAddress]="https://ykdh.10086.cn:9021/bmsmd/login;https://hdh.10086.cn:9021/bmsmd/login"
	#JDBC
        env[:jdbc_driverClass]="com.ebupt.ebas.database.driver.DataBaseDriver"
        env[:jdbc_jdbcUrl]="database.db0"
        #env[:jdbc_user]="informix"
        #env[:jdbc_password]="123@Abcd"
        env[:jdbc_miniPoolSize]="100"
        env[:jdbc_maxPoolSize]="100"
        env[:jdbc_initialPoolSize]="5"
        env[:jdbc_maxIdleTime]="0"
        env[:jdbc_acquireIncrement]="3"
        env[:jdbc_acquireRetryAttempts]="30"
        env[:jdbc_acquireRetryDelay]="1000"
        env[:jdbc_testConnectionOnCheckin]="true"
        env[:jdbc_idleConnectionTestPeriod]="1800"
        env[:jdbc_checkoutTimeout]="30000"
        env[:hibernate_dialect]="org.hibernate.dialect.InformixDialect"
        env[:scpdbname]="min@db11"
        env[:imageUploadpath]="/home/bms/bmsImageFile/upload/"
        #log4j
            env[:log4j_appender_bmsHibernateLog_File]="/home/bmsnet/webjoin/logs/bms-mng/hibernate.log"
            env[:log4j_appender_bmsLog_File]="/home/bmsnet/webjoin/logs/bms-mng/bms.log"
        #ftp
            env[:ftp_ip]="172.31.100.21;172.31.100.22"
            env[:ftp_name]="ykdhweb"
            env[:ftp_pass]="KC5$,$e#;M@9VNZ[]"
            env[:ftp_infoPath]="webjoin/data/apk"
        #database.properties 

        #primary db
       env[:database_db0_url]="jdbc:informix-sqli://10.153.138.14:7777/bms:informixserver=tjfxdb1;NEWLOCALE=zh_CN,en_us;NEWCODESET=GBK,8859-1,819"
       env[:database_db0_username]="bms"
       env[:database_db0_password]="EBUPT_b123$"

       #secordary db
       env[:database_db1_url]="jdbc:informix-sqli://192.168.1.27:7776/ismpdb:informixserver=db31;NEWLOCALE=zh_CN,en_us;NEWCODESET=GBK,8859-1,819"
       env[:database_db1_username]="informix"
       env[:database_db1_password]="123@Abcd"

        end 

    webapp '/bmsmd' do
        env[:ismpcUrl]="/home/bmsnet/webjoin/webapps/configHdh.ismpc.json"
	env[:projectUrl]="https://ykdh.10086.cn:9021/bmsmd/"	
	#个人业务临时文件地址
	env[:fileRootPath]="/home/bmsnet/bmsMarketFile/tempFile/"
        env[:ftpUrl] ="webjoin/data/apk/"
	env[:ftpUrl2]="webjoin/data/apk/images/prize" 
	env[:ftpUrl3]="webjoin/data/apk/images"	
	env[:imgUrl]="/home/bmsnet/bmsImageFile/upload/"
	env[:ftpIp]=" 172.31.100.22;172.31.100.21"
        env[:ftpPort]="19222"
        env[:ftpName]="ykdhweb"
        env[:ftpPassword]="M@9VNZ[];KC5$,$e#"
        env[:ftpUrl] ="webjoin/data/apk/"
	env[:ftpUrl2]="webjoin/image/prize" 
	env[:jdbc_database0_url]="jdbc:informix-sqli://10.153.138.14:7777/bms:informixserver=tjfxdb1;NEWLOCALE=zh_CN,en_us;NEWCODESET=GBK,8859-1,819"
	env[:jdbc_database0_username]="bms"
	env[:jdbc_database0_password]="EBUPT_b123$"

	env[:jdbc_database1_url]="jdbc:informix-sqli://192.168.1.27:7776/ismpdb:informixserver=db31;NEWLOCALE=zh_CN,en_us;NEWCODESET=GBK,8859-1,819"
	env[:jdbc_database1_username]="informix"
	env[:jdbc_database1_password]="123@Abcd"
  end

end
