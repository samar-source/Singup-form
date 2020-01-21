// Select Nationality
var nationalityArray = {1: 'select one', 2: 'Afghan', 3: 'Albanian', 4: 'Algerian', 5: 'American', 6: 'Andorran', 7: 'Angolan', 8: 'Antiguans', 9: 'Argentinean', 10: 'Armenian', 11: 'Australian', 12: 'Austrian', 13: 'Azerbaijani', 14: 'Bahamian', 15: 'Bahraini', 16: 'Bangladeshi', 17: 'Barbadian', 18: 'Barbudans', 19: 'Batswana', 20: 'Belarusian', 21: 'Belgian', 22: 'Belizean', 23: 'Beninese', 24: 'Bhutanese', 25: 'Bolivian', 26: 'Bosnian', 27: 'Brazilian', 28: 'British', 29: 'Bruneian', 30: 'Bulgarian', 31: 'Burkinabe', 32: 'Burmese', 33: 'Burundian', 34: 'Cambodian', 35: 'Cameroonian', 36: 'Canadian', 37: 'Cape Verdean', 38: 'Central African', 39: 'Chadian', 40: 'Chilean', 41: 'Chinese', 42: 'Colombian', 43: 'Comoran', 44: 'Congolese', 45: 'Costa Rican', 46: 'Croatian', 47: 'Cuban', 48: 'Cypriot', 49: 'Czech', 50: 'Danish', 51: 'Djibouti', 52: 'Dominican', 53: 'Dutch', 54: 'East Timorese', 55: 'Ecuadorean', 56: 'Egyptian', 57: 'Egyptian', 58: 'Equatorial Guinean', 59: 'Eritrean', 60: 'Estonian', 61: 'Ethiopian', 62: 'Fijian', 63: 'Filipino', 64: 'Finnish', 65: 'French', 66: 'Gabonese', 67: 'Gambian', 68: 'Georgian', 69: 'German', 70: 'Ghanaian', 71: 'Greek', 72: 'Grenadian', 73: 'Guatemalan', 74: 'Guinea-Bissauan', 75: 'Guinean', 76: 'Guyanese', 77: 'Haitian', 78: 'Herzegovinian', 79: 'Honduran', 80: 'Hungarian', 81: 'Icelander', 82: 'Indian', 83: 'Indonesian', 84: 'Iranian', 85: 'Iraqi', 86: 'Irish', 87: 'Israeli', 88: 'Italian', 89: 'Ivorian', 90: 'Jamaican', 91: 'Japanese', 92: 'Jordanian', 93: 'Kazakhstani', 94: 'Kenyan', 95: 'Kittian and Nevisian', 96: 'Kuwaiti', 97: 'Kyrgyz', 98: 'Laotian', 99: 'Latvian', 100: 'Lebanese', 101: 'Liberian', 102: 'Libyan', 103: 'Liechtensteiner', 104: 'Lithuanian', 105: 'Luxembourger', 106: 'Macedonian', 107: 'Malagasy', 108: 'Malawian', 109: 'Malaysian', 110: 'Maldivan', 111: 'Malian', 112: 'Maltese', 113: 'Marshallese', 114: 'Mauritanian', 115: 'Mauritian', 116: 'Mexican', 117: 'Micronesian', 118: 'Moldovan', 119: 'Monacan', 120: 'Mongolian', 121: 'Moroccan', 122: 'Mosotho', 123: 'Motswana', 124: 'Mozambican', 125: 'Namibian', 126: 'Nauruan', 127: 'Nauruan', 128: 'New Zealander', 129: 'Ni-Vanuatu', 130: 'Nicaraguan', 131: 'Nigerien', 132: 'North Korean', 133: 'Northern Irish', 134: 'Norwegian', 135: 'Omani', 136: 'Pakistani', 137: 'Palauan', 138: 'Panamanian', 139: 'Papua New Guinean', 140: 'Paraguayan', 141: 'Peruvian', 142: 'Polish', 143: 'Portuguese', 144: 'Qatari', 145: 'Romanian', 146: 'Russian', 147: 'Rwandan', 148: 'Saint Lucian', 149: 'Salvadoran', 150: 'Samoan', 151: 'San Marinese', 152: 'Sao Tomean', 153: 'Saudi', 154: 'Scottish', 155: 'Senegalese', 156: 'Serbian', 157: 'Seychellois', 158: 'Sierra Leonean', 159: 'Singaporean', 160: 'Slovakian', 161: 'Slovenian', 162: 'Solomon Islander', 163: 'Somali', 164: 'South African', 165: 'South Korean', 166: 'Spanish', 167: 'Sri Lankan', 168: 'Sudanese', 169: 'Surinamer', 170: 'Swazi', 171: 'Swedish', 172: 'Swiss', 173: 'Syrian', 174: 'Taiwanese', 175: 'Tajik', 176: 'Tanzanian', 177: 'Thai', 178: 'Togolese', 179: 'Tongan', 180: 'Trinidadian or Tobagonian', 181: 'Tunisian', 182: 'Turkish', 183: 'Tuvaluan', 184: 'Ugandan', 185: 'Ukrainian', 186: 'Uruguayan', 187: 'Uzbekistani', 188: 'Venezuelan', 189: 'Vietnamese', 190: 'Welsh', 191: 'Yemenite', 192: 'Zambian', 193: 'Zimbabwean'};
 
$.each(nationalityArray, function(key, value) {
    $('#nationality').append('<option value="' + key + '">' + value + '</option>');
});

// Display checkmark in input type Email, if Email address entered right
$(document).ready(function() {  
 $("#email").keyup(function(){
    
    var email = $("#email").val();
  
    if(email != 0) {
        if(isValidEmailAddress(email))
        {
            $("#checkmark").css({"display": "inline-block"});
        } 
    } else {
        $("#validEmail").css({"display": "none"}); 
    }
 });
});
  
 // function isValidEmailAddress(emailAddress) {
 //    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
 //    return pattern.test(emailAddress);
 // }

jQuery(function($) {
  $('#form').on('submit', function(event) {
    if (validateForm()) { //If there are errors returns true
      event.preventDefault();
    }
  });
  function validateForm() {
    $(".text-error").remove();

    //Checking first name
    var el_l = $("#first-name");
    if (el_l.val().length < 4) {
      var v_first_name = true;
      el_l.after('<span class="text-error for-first-name">The first name must be more than 3 characters</span>');
      $(".for-first-name").css({top: el_l.position().top + el_l.outerHeight() + 2});
    }
    $("#first-name").toggleClass('error', v_first_name );

    //Checking last name
    var el_l = $("#last-name");
    if (el_l.val().length < 4) {
      var v_last_name = true;
      el_l.after('<span class="text-error for-last-name">The last name must be more than 3 characters</span>');
      $(".for-last-name").css({top: el_l.position().top + el_l.outerHeight() + 2});
    }
    $("#last-name").toggleClass('error', v_last_name );
    
    //Checking e-mail
    var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var el_e = $("#email");
    var v_email = el_e.val()?false:true;
    if ( v_email ) {
      el_e.after('<span class="text-error for-email">The e-mail field must be filled in</span>');
      $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
    } else if (!reg.test( el_e.val())) {
      v_email = true;
      el_e.after('<span class="text-error for-email">You specified an invalid e-mail address</span>');
      $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
    }
    $("#email").toggleClass('error', v_email );
    
    //Checking passwords
    var el_p1 = $("#password");
    var el_p2 = $("#confirm-password");
    var v_pass1 = el_p1.val()?false:true;
    var v_pass2 = el_p1.val()?false:true;
    if (el_p1.val() != el_p2.val()) {
      var v_pass1 = true;
      var v_pass2 = true;
      el_p2.after('<span class="text-error for-password">Passwords don&#39;t match!</span>');
      $(".for-password").css({top: el_p1.position().top + el_p1.outerHeight() + 2});
    } else if (el_p1.val().length < 6) {
      var v_pass1 = true;
      var v_pass2 = true;
      el_p1.after('<span class="text-error for-password">The password must be at least 6 characters long</span>');
      $(".for-password").css({top: el_p1.position().top + el_p1.outerHeight() + 2});
    }
    $("#password").toggleClass('error', v_pass1 );
    $("#confirm-password").toggleClass('error', v_pass2 );
    return ( v_first_name || v_last_name || v_email || v_pass1 || v_pass2 );
  }
});

 // Calendar for form Select Date of Birth
window.onload = function () {
    var day = new Date,
        md = (new Date(day.getFullYear(), day.getMonth() + 1, 0)).getDate(),
        $month_name = "January February March April May June July August September October November December".split(" ");
 
    function set_select(a, c, d, e) {
        var el = document.getElementsByName(a)[0];
        for (var b = el.options.length = 0; b < c; b++) {
            el.options[b] = new Option(a == 'month' ? $month_name[b] : b + d, b + d);
         }
        el.options[e] && (el.options[e].selected = !0)
    }
    set_select("day", md, 1, day.getDate() - 1);
    set_select("month", 12, 1, day.getMonth());
    set_select("year", 101, day.getFullYear()-100, 100);

    var year = document.getElementById('year');
    var month = document.getElementById("month");
 
    function check_date() {
        var a = year.value | 0,
            c = month.value | 0;
        md = (new Date(a, c, 0)).getDate();
        a = document.getElementById("day").selectedIndex;
        set_select("day", md, 1, a)
    };
 
    if (document.addEventListener) {
        year.addEventListener('change', check_date, false);
        month.addEventListener('change', check_date, false);
 
    } else {
        year.detachEvent('onchange', check_date);
        month.detachEvent('onchange', check_date);
    }
 
}
