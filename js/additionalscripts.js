function checkUser() {
    var email = prompt("Please enter the email you used to signup");
    var validEmails = ["ikhater50@gmail.com","shivakuj@my.erau.edu","lekimberly022@gmail.com","nguyenkt6123@gmail.com","vl16d@my.fsu.edu","al17j@my.fsu.edu","awf16b@my.fsu.edu","mra17@my.fsu.edu","syang35@gmu.edu","Sor.david12@gmail.com","maelstorm189@gmail.com","kelvintelgar@gmail.com","trandm2@gmail.com","trandm2@gmail.com","ptran115@gmail.com","letimmy4699@gmail.com","lnguyen23@lamar.edu","thanhdnguyen1999@gmail.com","benjamin.tsang@saseconnect.org","slee5331@gmail.com","lpsantia@ncsu.edu","mfshah@ncsu.edu","jfang8@ncsu.edu","stiwari3@ncsu.edu","cmiller7@ncsu.edu","jsnayaga@ncsu.edu","ttang3@ncsu.edu","ewsung@ncsu.edu","tnguye24@ncsu.edu","thanh.l.pham@okstate.edu","pjy6316@gmail.com","zachary.montebon@okstate.edu","hohoangtu@hotmail.com","ah63@rice.edu","azk4@rice.edu","ps62@rice.edu","jigbokwe@stanford.edu","lesiqu.engr@gmail.com","ron1212@tamu.edu","nityaperi28@gmail.com","jma907@tamu.edu","nguyen.emily456@gmail.com","aaronrildefonso@tamu.edu","aishbm09@gmail.com","vannhoangpham@gmail.com","Christopher.hung22@gmail.com","brandonstong1999@gmail.com","sharon_pearlnath@tamu.edu","ksheng09@gmail.com","njustice.nm@gmail.com","chitrang1995@gmail.com","kimdtdang@gmail.com","koja@knights.ucf.edu","palompog@knights.ucf.edu","Yang.Jiye.1997@gmail.com","muib.akinyele@knights.ucf.edu","ahmadzeinkhater@gmail.com","djohal@knights.ucf.edu","paulongonzales@gmail.com","daniel.olis@outlook.com","katetodd@ufl.edu","audreymyat@ufl.edu","nateeste@gmail.con","acipriani@ufl.edu","jademonteir01@hotmail.com","moxaraval1122@gmail.com","deepjariwala@ufl.edu","c.limpioso@ufl.edu","e.lee1@ufl.edu","nateeste@gmail.com","krushapatel@ufl.edu","sy.liam@ufl.edu","leonie12@ufl.edu","danielkogstrom@gmail.com","ananyajain@ufl.edu","lit1@ufl.edu","mabbassi@uh.edu","kadiezhang@gmail.com","sumayyahisl1@gmail.com","nick.subroto6@gmail.com","rylen.maniego@gmail.com","edison.t.huynh@gmail.com","AlxN23434@gmail.com","carterung@gmail.com","theresap20@gmail.com","jonah.kamat9223@gmail.com","mrtuanle444@gmail.com","dannykwon209@gmail.com","bryanpham290@gmail.com","lanceechin@gmail.com","joannp19@gmail.com","carmen.ly.20@gmail.com","kcprimals@gmail.com","derekdan1996@gmail.com","nnoorazman@uh.edu","ntwiddif@uno.edu","surajm99@outlook.com","nathankhor@usf.edu","niraliben@usf.edu","felipey@usf.edu","loganmorrell@gmail.com","tanthai028@gmail.com","nsadowski@usf.edu","cramangk@vols.utk.edu","achen17@vols.utk.edu","bpham3@vols.utk.edu","xli136@vols.utk.edu","derekye@utexas.edu","chrislduan@utexas.edu","fei.liu@utexas.edu","gerardorafaelbote@utexas.edu","jonathanleung662@gmail.com","ddnguyen@utexas.edu","evanhe@utexas.edu","dnguyen02@utexas.edu","johnjlee10@utexas.edu","ssk2374@utexas.edu","ethan.chen@utexas.edu","bchu@utexas.edu","nadersyed5@gmail.com","shaharyar.shahabuddin@gmail.com","adtran16@gmail.com","jessica.majid@mavs.uta.edu","stefan.mancillas@gmail.com","nathen.paul@mavs.uta.edu","vinhdung.tran@mavs.uta.edu","vinhdung.tran@mavs.uta.edu","nguyen.h1108@gmail.com","barakagwiratabitha@gmail.com","thinh.nguyen4@mavs.uta.edu","kylemizu@gmail.com","jxl149330@utdallas.edu","joseph.allen0701@gmail.com","mansalazar00@gmail.com","nmb5rj@virginia.edu","julia314eng@vt.edu"];
    var emailvalid = false;

    if (email == null || email == "") {
        window.alert("Empty or no email entered for link access");
    } 
    
    for (var i = 0; i < validEmails.length; i++){
        if (email == validEmails[i]) {
            if (confirm("Email valid! Would you like to proceed to Brazen?")){
                window.open("https://app.brazenconnect.com/a/UFL-SASE/e/pPA3r");
            }
            emailvalid = true;
        }
    }

    if (!emailvalid) {
        window.alert("Invalid email entered!");
    }
}