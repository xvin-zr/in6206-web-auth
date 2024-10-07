import $ from 'jquery';
import { API_URL } from '../api';
import Auth from '../Auth';

Auth.autoLogin();

$('#login-form').on('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    $.ajax({
        url: `${API_URL}/auth/login`,
        method: 'POST',
        data: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
        }),
        xhrFields: {
            withCredentials: true,
        },
        contentType: 'application/json',
        success: function (resp: { name: string; message: string }) {
            Auth.postLogin({
                name: resp.name,
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            });
            alert(resp.message);
            window.location.href = `../main.html`;
        },
        error: function (xhr) {
            $('#password').val('');
            alert(xhr.responseText);
        },
    });
});
