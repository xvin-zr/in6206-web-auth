import $ from 'jquery';
import { API_URL } from '../main';

$('#signup-form').on('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    formData.forEach(console.log);

    $.ajax({
        url: `${API_URL}/auth/signup`,
        method: 'POST',
        data: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }),
        contentType: 'application/json',
        success: function (resp: string) {
            alert(resp);
            window.location.href = './index.html';
        },
    });
});
