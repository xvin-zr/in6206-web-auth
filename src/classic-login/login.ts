import $ from 'jquery';
import { API_URL } from '../main';

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
        contentType: 'application/json',
        success: function (resp: { name: string; message: string }) {
            alert(resp.message);
        },
        error: function (xhr) {
            $('#password').val('');
            alert(xhr.responseText);
        },
    });
});
