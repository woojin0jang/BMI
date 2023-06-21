jQuery(document).ready(function() {

    $(".reset").click(function() {
        $(".cm").val('')
        $(".kg").val('')
        $(".bm_result").val('')
        $(".bmi_result").val('')
    })
    
    $(".result").click(function() {
        if($(".cm").val()=="") {
            alert('신장을 입력하세요.');
        }
        else if($(".kg").val()=="") {
            alert('체중을 입력하세요.');
        }
        else {

            var cm = $(".cm").val();
            var kg = $(".kg").val();
            cm = cm * 0.01;
            var total = (kg/(cm*cm)).toFixed(2);
            
            $(".bmi_result").val(total)
        
        if(total < 18.5 ) {
            $(".bm_result").val("저체중 입니다.");
        }
        else if(total>= 18.5 && total<=22.9 ){
            $(".bm_result").val("정상 입니다.")
        }
        else if(total>= 23 && total<=25 ){
            $(".bm_result").val("과체중 입니다.")
        }
        else if(total>25 ){
            $(".bm_result").val("비만 입니다.")
        }
        }
    })

})
