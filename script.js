$(document).ready(function(){

    $('#menu').click(function(){
       $('.dashbord').toggleClass("active");
       $('h5').toggleClass("d-none");
       $('.lgo').toggleClass("d-none");
       $('.main').toggleClass("active");
    });
    var txt = ' ';
    var index = ' ';
    var data = ' ';
    $('#regist').click(function(){
        var fullName = $('#fullname').val();
        var gender = $('#gender').val(); // val 
        var course = $('#course').val(); // val
        var phone = $('#phone').val();
        var email = $('#email').val();
        var shift = $('#shift').val();
            data = ` 
                <tr>
                    <td>${fullName}</td>
                    <td>${gender}</td>
                    <td>${course}</td>
                    <td>${phone}</td>
                    <td>${email}</td>
                    <td>${shift}</td>
                    <td>
                        <button id="btn-up" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Edit</button>
                        <button id="btn-re" class="btn btn-danger">Remove</button>
                    </td>
                </tr>
                
            `;
            $('tbody').append(data);
            $('#fullname').val('');
            $('#nickname').val();
            $('#gender').val();
            $('#course').val();
            $('#phone').val();
            $('#email').val();
            $('#shift').val();
            swal({
                title: "Thank for Register!",
                text: "Pls screeshot before pay money!",
                icon: "success",
                button: "Done!",
              });
    });

    $('body').on('click','#btn-up',function(){
        index = $(this).parents('tr').index();
        var row = $('tbody').find('tr');

        var fullName = $(this).parents('tr').find('td').eq(0).text();
        var gender = $(this).parents('tr').find('td').eq(1).text();
        var course = $(this).parents('tr').find('td').eq(2).text();
        var phone = $(this).parents('tr').find('td').eq(3).text();
        var email = $(this).parents('tr').find('td').eq(4).text();
        var time = $(this).parents('tr').find('td').eq(5).text();
        alert(index);
        console.log(row);

        $('#fullname').val(fullName);
        $('#gender').val(gender);
        $('#course').val(course);
        $('#phone').val(phone);
        $('#email').val(email);
        $('#shift').val(time);

            $('#up').click(function(){
                var new_fullName = $('#fullname').val();
                var new_gender= $('#gender').val();
                var new_course = $('#course').val();
                var new_phone = $('#phone').val();
                var new_email = $('#email').val();
                var new_shift = $('#shift').val();

                txt = ` 
                        <td>${new_fullName}</td>
                        <td>${new_gender}</td>
                        <td>${new_course}</td>
                        <td>${new_phone}</td>
                        <td>${new_email}</td>
                        <td>${new_shift}</td>
                        <td>
                            <button id="btn-up" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Edit</button>
                            <button id="btn-re" class="btn btn-danger">Remove</button>
                        </td>
                `;
                row.eq(index).html(txt);
                swal({
                    title: "Updated!",
                    text: "Your Data has been Updated!!",
                    icon: "success",
                    button: "Done!",
                  });
            });
        
    });   
    $('body').on('click','#btn-re',function(){
        index = $(this).parents('tr').index();
        var row = $('tbody').find('tr');

        row.eq(index).remove();
    });
 });
        