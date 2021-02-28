// Including "Internships" in title of page
document.title += " - Internships"; 

// Declaring the necessary variables.
let companies = document.getElementsByClassName("company-card");
let form = document.getElementById("form_main_wrapper");
// let form = document.form["form_main_wrapper"];
let company_form_field = form.querySelector("#"+"CompanyName");
let companyRole_form_field = form.querySelector("#Role");
let firstName_form_field = form.querySelector("#firstName");
let lastName_form_field = form.querySelector("#lastName");
let mobile_form_field = form.querySelector("#mobile");
let mobile2_form_field = form.querySelector("#mobile_alternative");
let email_form_field = form.querySelector("#email");
let enrolment_form_field = form.querySelector("#enrollment");
let college_year_form_field = form.querySelector("#College_Year_Selection");
let college_branch_form_field = form.querySelector("#College_Branch_Selection");
let skills_input_form_field = form.querySelector("#skills");
let ResumeLink_form_field = form.querySelector("#ResumeDoc");
let submit_button = document.querySelector("button[type=submit]");
let company_names = {
    // Sample Data, to be modified later 
    "Company1":"Company A",
    "Company2":"Company B",
    "Company3":"Company C",
    "Company4":"Company D",
    "E-Cell-SGSITS":"E-Cell SGSITS",
}
// let company_role = {
//     "Company1": "Some Intern",
//     "Company2": "Other Intern",
//     "Company3": "Another Intern",
//     "Company4": "Awaiting Intern",
//     "E-Cell-SGSITS": "Entrepreneurial Intern",
// }

// Hiding Blank Template Form, to be shown later when a company is selected
form.style.display = "none";

// Selecting a company in the form directly from the selection of company by clicking it.
for (let company_name in company_names){
    company_id = "#"+company_name;
    company_button = document.querySelector(company_id);
    company_button.onclick = ()=>{
        company_form_field.setAttribute("value", company_names[company_name]);
        company_form_field.value = company_names[company_name];
        company_role = document.querySelector("#"+company_name).children[1].childNodes[1].innerText.substring(5);   //substring(5) to omit 'Role:' part
        companyRole_form_field.setAttribute("value", company_role);
        companyRole_form_field.value = company_role;
        form.style.display = "block";
        window.location.href ="#form_main_wrapper";
    }
}

// Data Checkings Below. To-Do: Ignore Extra Leading and Trailing whitespaces, if any
/* Form Fields associated variables defined : firstName_form_field;lastName_form_field;
                                            mobile_form_field;mobile2_form_field;email_form_field;
                                            enrolment_form_field;college_year_form_field;college_branch_form_field;
                                            skills_input_form_field;ResumeLink_form_field; */


//WARNING BOX AND ALERT DECLERATIONS
checkbox = document.getElementById("CheckBoxTnC");
warning_box = document.querySelector(".closing-elements");
Branch_Valid_Codes = ["BM", "CE", "CS", "EC", "EE", "EI", "IP", "IT", "ME"];

warning_box.innerHTML = "";
alert_HTML = (theme, error_message) => `
    <div class="alert alert-${theme} alert-dismissible fade show" role="alert">
        <i class = "fas fa-exclamation-${theme == "warning" ? "triangle" : "circle"}"></i>&nbsp;<strong>Error!</strong> ${error_message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;

//FUNCTION TO CHECK NON-EMPTY INPUTS
function nonEmptyCheck(formfield) {
    if (!formfield.value) {
        return 0;
    }
    return 1;
}

function nameCheck(formfield) {
    check_format = /[A-Za-z]+/;
    if (!check_format.test(formfield.value)) {
        error_message = `Name can only have alphabets. Please check it again.`;
        warning_box.innerHTML += alert_HTML("danger", error_message);
        return 0;
    }
    return 1;
}

// FUNCTION TO CHECK FOR NON-EMPTY AND VALID MOBILE NUMBER
function checkMobile() {
    if (!mobile_form_field.value || mobile_form_field.value == 0 || mobile_form_field.value < 1e9 || mobile_form_field.value >= 1e10) {
        error_message = `Mobile Number is Required. Please provide your 10 digit mobile number which is currently active. It may be used for future communications if necessary.`;
        warning_box.innerHTML += alert_HTML("danger", error_message);
        return 0;
    }
    return 1;
}

// FUNCTION TO CHECK FOR DIFFERENCE IN MOBILE NUMBER AND ALTERNATIVE MOBILE NUMBER 
function checkDiffMobile() {
    if (mobile_form_field.value === mobile2_form_field.value) {
        error_message =`Please provide a different mobile number in "Alternative Mobile Number" form field. If you do not want to provide any alternative number, consider leaving that column blank`;
        warning_box.innerHTML += alert_HTML("warning", error_message);  // Warning to be soon replaced and used for permissible errors.
        return 0;
    }
    return 1;
}

//FUNCTION CHECKING ENROLLMENT NO.
function checkEnrollment() {
    if (enrolment_form_field.value.length != 12 || Branch_Valid_Codes.indexOf(enrolment_form_field.value.substring(4, 6).toUpperCase()) < 0) {
        warning_message = `Please check and ensure whether your Enrolment Number is correctly filled. If you are sure that it is correct, go ahead and hit the submit button again.`;
        warning_box.innerHTML += alert_HTML("warning", warning_message);
        return 0;
    }
    return 1;
}
//FUNCTION TO CHECK NON-EMPTY YEAR
function yearCheck() {
    if (!college_year_form_field.value) {
        error_message = `College Year is Required. Please select your year from DropDown.`;
        warning_box.innerHTML += alert_HTML("danger", error_message);
        return 0;
    }
    return 1;
}
//FUNCTION TO CHECK EMAIL
function checkEmail() {
    if (!(email_form_field.checkValidity()) || !email_form_field.value) {
        error_message = `Please provide a valid email address before submitting the form.`;
        warning_box.innerHTML += alert_HTML("danger", error_message);
        return 0;
    }
    return 1;
}
//FUNCTION CHECKING BRANCH
function checkBranch() {
    if (!college_branch_form_field.value || Branch_Valid_Codes.indexOf(college_branch_form_field.value.toUpperCase()) < 0) {
        error_message = `Your Current Branch is Required. Please select or mention your correct branch.`;
        warning_box.innerHTML += alert_HTML("danger", error_message);
        return 0;
    }
    return 1;
}
//FUNCTION CHECKING DECLARATION IS TICKED
function ticked() {
    if (!(checkbox.checked)) {
        error_message = `You should click the checkbox and agree to the declaration prior to submitting the form.`;
        warning_box.innerHTML = alert_HTML("danger", error_message);
        return 0;
    }
    return 1;
}

// Setting Submit button actions
enrolment_isChecked = 0;
submit_button.onclick = ()=>{
    warning_box.innerHTML = "";     // Clearing previously reported errors
    // Performing checks, one at a time //
    if (!ticked()) return 0;
    if (!nameCheck(firstName_form_field)) return 0;
    if (!nameCheck(lastName_form_field)) return 0;
    if (!checkMobile()) return 0;
    if (!checkDiffMobile()) return 0;
    if (!enrolment_isChecked) {
        enrolment_isChecked = 1;
        if (!checkEnrollment()) return 0;
    }
    if (!yearCheck()) return 0;
    if (!checkEmail()) return 0;
    if (!checkBranch()) return 0;
    // console.log("checks successful!");
    // Output the form values recieved [Not Working with jQuery]
    // console.log($("form").serialize());
    // console.log(form.dataset);
    // $("form").unbind("submit", preventDefault);
    // $('form').unbind('submit').submit();
    // Now that the checks are successful, the following statements will execute without any problem
    formData = {
        name: firstName_form_field.value + " " + lastName_form_field.value,
        company: company_form_field.value,
        companyRole: companyRole_form_field.value,
        email: email_form_field.value,
        mobile: mobile_form_field.value,
        mobile_alt: mobile2_form_field.value,
        enrolment: enrolment_form_field.value,
        year: college_year_form_field.value,
        branch: college_branch_form_field.value,
        skills: skills_input_form_field.value,
        resumeLink: ResumeLink_form_field.value
    };
    $.post("/internship", formData);
    // Object.keys(formData).forEach((value) => {
    //     // if (formData[value] == false) delete formData[value];
    //     if (!formData[value]) delete formData[value];
    // });
    // console.log(formData);
    // $.post("/internship", formData, function(data, status){
    //     console.log("Data: " + data + " with status: " + status);
    // });
    // fetch("/internship", {
    //     method: "POST",
    //     body: JSON.stringify(formData)
    // });
    // location.reload();
};

// Adding checks to application form fields whenever user leaves them, with onblur events.  [ Deprecated, as it was causing stacks of error reportings on simple tab-jumps, without any limit ]
// firstName_form_field.onblur = function () { nameCheck(firstName_form_field); };
// lastName_form_field.onblur = function () { nameCheck(lastName_form_field); };
// mobile_form_field.onblur = function () { checkMobile(); };
// mobile2_form_field.onblur = function () { checkDiffMobile(); };
// // enrolment_form_field.onblur = function () { checkEnrollment(); };
// college_year_form_field.onblur = function () { yearCheck(); };
// email_form_field.onblur = function () { checkEmail(); };
// college_branch_form_field.onblur = function () { checkBranch(); };

// Initialising Bootstrap-v4 Tooltips using jQuery [A Neccessity]
$(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Initiating animating SVG with lottie.js
// $(document).on("DOMContentLoaded", () => {
var parameters = {
    container: document.querySelector('#SVG'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData
};
// var anim;
anim = lottie.loadAnimation(parameters);
anim.play();
// });