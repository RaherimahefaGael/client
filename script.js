const _0x3f74dd = _0xbb3e; (function (_0x6fe60f, _0x3220ce) { const _0x378312 = _0xbb3e, _0x3188a7 = _0x6fe60f(); while (!![]) { try { const _0x3939b9 = parseInt(_0x378312(0x1ab)) / 0x1 + -parseInt(_0x378312(0x1c7)) / 0x2 + -parseInt(_0x378312(0x1e6)) / 0x3 * (parseInt(_0x378312(0x1c0)) / 0x4) + parseInt(_0x378312(0x1a7)) / 0x5 + -parseInt(_0x378312(0x1ec)) / 0x6 + -parseInt(_0x378312(0x1c6)) / 0x7 * (-parseInt(_0x378312(0x1b8)) / 0x8) + -parseInt(_0x378312(0x1d8)) / 0x9; if (_0x3939b9 === _0x3220ce) break; else _0x3188a7['push'](_0x3188a7['shift']()); } catch (_0xa54088) { _0x3188a7['push'](_0x3188a7['shift']()); } } }(_0x2960, 0x66919)); const openModalBtn = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1ee)), closeModalBtn = document[_0x3f74dd(0x1ad)]('closeModalBtn'), modal = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1d1)), clientForm = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1e8)), clientTableBody = document[_0x3f74dd(0x19b)]('#clientTable\x20tbody'), modalTitle = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1f5)), submitBtn = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x192)), clientIdInput = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1cc)), searchInput = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1cd)), searchBtn = document['getElementById'](_0x3f74dd(0x1b6)), imageModal = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1a6)), closeImageModalBtn = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1f0)), expandedImage = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x195)); let clients = []; const token = localStorage[_0x3f74dd(0x1e2)]('token'); !token && (window[_0x3f74dd(0x1ba)][_0x3f74dd(0x18d)] = _0x3f74dd(0x1c3)); async function fetchWithAuth(_0x551bfe, _0x25b83e = {}) { const _0x4d29da = _0x3f74dd; return _0x25b83e[_0x4d29da(0x1ca)] = { ..._0x25b83e[_0x4d29da(0x1ca)], 'Authorization': _0x4d29da(0x198) + token }, fetch(_0x551bfe, _0x25b83e); } openModalBtn[_0x3f74dd(0x1d7)](_0x3f74dd(0x1b0), () => { const _0x345785 = _0x3f74dd; modalTitle['textContent'] = 'Ajouter\x20un\x20Client', submitBtn[_0x345785(0x1a4)] = _0x345785(0x1b4), clientForm['reset'](), clientIdInput[_0x345785(0x1d5)] = '', modal[_0x345785(0x1a5)][_0x345785(0x1da)] = _0x345785(0x1a9); }), closeModalBtn['addEventListener'](_0x3f74dd(0x1b0), () => { const _0x16bbdb = _0x3f74dd; modal[_0x16bbdb(0x1a5)][_0x16bbdb(0x1da)] = _0x16bbdb(0x1db); }), window[_0x3f74dd(0x1d7)](_0x3f74dd(0x1b0), _0x48dc9c => { const _0xe40860 = _0x3f74dd; _0x48dc9c[_0xe40860(0x1ae)] === modal && (modal[_0xe40860(0x1a5)][_0xe40860(0x1da)] = 'none'); }), clientForm['addEventListener']('submit', async _0x41980e => { const _0x3b7efe = _0x3f74dd; _0x41980e[_0x3b7efe(0x19f)](); const _0x48fe52 = new FormData(); _0x48fe52[_0x3b7efe(0x1d4)](_0x3b7efe(0x1ac), document[_0x3b7efe(0x1ad)](_0x3b7efe(0x1ac))[_0x3b7efe(0x1d5)]), _0x48fe52[_0x3b7efe(0x1d4)]('ref', document[_0x3b7efe(0x1ad)](_0x3b7efe(0x1d3))['value']), _0x48fe52[_0x3b7efe(0x1d4)](_0x3b7efe(0x1e7), document[_0x3b7efe(0x1ad)](_0x3b7efe(0x1e7))[_0x3b7efe(0x1d5)]), _0x48fe52[_0x3b7efe(0x1d4)](_0x3b7efe(0x1a3), document[_0x3b7efe(0x1ad)](_0x3b7efe(0x1a3))[_0x3b7efe(0x1d5)]), _0x48fe52[_0x3b7efe(0x1d4)](_0x3b7efe(0x1c4), document[_0x3b7efe(0x1ad)](_0x3b7efe(0x1c4))[_0x3b7efe(0x1f1)][0x0]); const _0x27bdee = clientIdInput[_0x3b7efe(0x1d5)], _0x3a4e9a = _0x27bdee ? _0x3b7efe(0x1eb) + _0x27bdee : _0x3b7efe(0x1c9), _0x2180ce = _0x27bdee ? _0x3b7efe(0x1bd) : 'POST'; try { const _0x445f54 = await fetchWithAuth(_0x3a4e9a, { 'method': _0x2180ce, 'body': _0x48fe52 }); _0x445f54['ok'] ? (alert(_0x27bdee ? _0x3b7efe(0x1c1) : _0x3b7efe(0x1b3)), clientForm[_0x3b7efe(0x1d0)](), modal['style'][_0x3b7efe(0x1da)] = _0x3b7efe(0x1db), fetchClients()) : alert(_0x3b7efe(0x1bf)); } catch (_0xd50942) { console[_0x3b7efe(0x1f4)](_0x3b7efe(0x18e), _0xd50942); } }); async function fetchClients() { const _0x2501fd = _0x3f74dd; try { const _0x57549b = await fetchWithAuth(_0x2501fd(0x1c9)); clients = await _0x57549b[_0x2501fd(0x1c5)](), clients[_0x2501fd(0x1a8)]((_0x5107e6, _0x262106) => _0x5107e6['nom'][_0x2501fd(0x191)](_0x262106[_0x2501fd(0x1ac)])), console[_0x2501fd(0x1f3)](clients), renderClients(clients); } catch (_0x527fc9) { console[_0x2501fd(0x1f4)]('Erreur\x20:', _0x527fc9); } } function _0x2960() { const _0x22dbae = ['appendChild', 'clientId', 'searchInput', 'true', 'Les\x20nouveaux\x20mots\x20de\x20passe\x20ne\x20correspondent\x20pas.', 'reset', 'modal', 'body', 'ref', 'append', 'value', 'Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20client.', 'addEventListener', '3756429fiVDSl', 'Erreur\x20lors\x20de\x20la\x20modification\x20du\x20mot\x20de\x20passe.', 'display', 'none', '\x22\x20alt=\x22Photo\x20du\x20client\x22\x20class=\x22clickable-image\x22>', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>', 'transition', 'forEach', 'input', 'opacity\x201s', 'getItem', 'removeEventListener', 'currentPassword', '0.0', '17163cKXbuf', 'no_compteur', 'clientForm', 'application/json', 'createElement', 'http://localhost:3000/clients/', '1480686RuPPGy', 'closeChangePasswordModalBtn', 'openModalBtn', 'submit', 'closeImageModalBtn', 'files', 'filter', 'log', 'error', 'modalTitle', 'Mot\x20de\x20passe\x20modifié\x20avec\x20succès\x20!', 'href', 'Erreur\x20:', 'setItem', 'Une\x20erreur\x20s\x27est\x20produite\x20lors\x20de\x20la\x20modification\x20du\x20mot\x20de\x20passe.', 'localeCompare', 'submitBtn', 'src', 'newPassword', 'expandedImage', 'removeItem', 'mousemove', 'Bearer\x20', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'keydown', 'querySelector', ')\x22>Supprimer</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', ')\x22>Modifier</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22delete\x22\x20onclick=\x22deleteClient(', 'DELETE', 'preventDefault', 'includes', 'toLowerCase', 'innerHTML', 'adresse', 'textContent', 'style', 'imageModal', '1606005dkkLvF', 'sort', 'flex', 'changePasswordForm', '810420QoanOC', 'nom', 'getElementById', 'target', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>', 'click', 'opacity', 'Modifier', 'Client\x20ajouté\x20avec\x20succès\x20!', 'Ajouter', 'token', 'searchBtn', 'logoutBtn', '384224ikcrqW', '<img\x20src=\x22http://localhost:3000', 'location', 'http://localhost:3000/change-password', 'POST', 'PUT', 'trim', 'Erreur\x20lors\x20de\x20la\x20soumission\x20du\x20formulaire.', '20TuQtqj', 'Client\x20modifié\x20avec\x20succès\x20!', 'Êtes-vous\x20sûr\x20de\x20vouloir\x20supprimer\x20ce\x20client\x20?', 'index.html', 'photo', 'json', '14tedUqc', '229578ejrRnj', 'Client\x20supprimé\x20avec\x20succès\x20!', 'http://localhost:3000/clients', 'headers']; _0x2960 = function () { return _0x22dbae; }; return _0x2960(); } function filterClients(_0x4cb975) { const _0x45c832 = _0x3f74dd, _0x311794 = clients[_0x45c832(0x1f2)](_0x1f2a4e => { const _0x13f1e5 = _0x45c832; return _0x1f2a4e[_0x13f1e5(0x1ac)] && _0x1f2a4e['nom']['toLowerCase']()['includes'](_0x4cb975) || _0x1f2a4e['ref'] && _0x1f2a4e[_0x13f1e5(0x1d3)]['toLowerCase']()[_0x13f1e5(0x1a0)](_0x4cb975) || _0x1f2a4e[_0x13f1e5(0x1e7)] && _0x1f2a4e[_0x13f1e5(0x1e7)][_0x13f1e5(0x1a1)]()[_0x13f1e5(0x1a0)](_0x4cb975) || _0x1f2a4e[_0x13f1e5(0x1a3)] && _0x1f2a4e[_0x13f1e5(0x1a3)]['toLowerCase']()[_0x13f1e5(0x1a0)](_0x4cb975); }); _0x311794['sort']((_0x433b29, _0x42e380) => _0x433b29[_0x45c832(0x1ac)][_0x45c832(0x191)](_0x42e380[_0x45c832(0x1ac)])), renderClients(_0x311794); } function renderClients(_0x3b3fb8) { const _0x29d3b2 = _0x3f74dd; clientTableBody[_0x29d3b2(0x1a2)] = '', _0x3b3fb8[_0x29d3b2(0x1df)](_0x4ded94 => { const _0x1d787c = _0x29d3b2, _0x2d1bcb = document[_0x1d787c(0x1ea)]('tr'); _0x2d1bcb[_0x1d787c(0x1a2)] = _0x1d787c(0x1af) + _0x4ded94[_0x1d787c(0x1ac)] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x4ded94['ref'] + _0x1d787c(0x1dd) + _0x4ded94[_0x1d787c(0x1e7)] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x4ded94[_0x1d787c(0x1a3)] + _0x1d787c(0x199) + (_0x4ded94[_0x1d787c(0x1c4)] ? _0x1d787c(0x1b9) + _0x4ded94['photo'] + _0x1d787c(0x1dc) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22edit\x22\x20onclick=\x22editClient(' + _0x4ded94['id'] + _0x1d787c(0x19d) + _0x4ded94['id'] + _0x1d787c(0x19c), clientTableBody[_0x1d787c(0x1cb)](_0x2d1bcb); }), document['querySelectorAll']('.clickable-image')[_0x29d3b2(0x1df)](_0x3b400c => { const _0x5860dc = _0x29d3b2; _0x3b400c[_0x5860dc(0x1d7)](_0x5860dc(0x1b0), () => { const _0x32b231 = _0x5860dc; openImageModal(_0x3b400c[_0x32b231(0x193)]); }); }); } function openImageModal(_0xd4c259) { const _0xea6829 = _0x3f74dd; expandedImage[_0xea6829(0x193)] = _0xd4c259, imageModal['style'][_0xea6829(0x1da)] = _0xea6829(0x1a9); } closeImageModalBtn[_0x3f74dd(0x1d7)]('click', () => { const _0x397791 = _0x3f74dd; imageModal[_0x397791(0x1a5)][_0x397791(0x1da)] = 'none'; }), window[_0x3f74dd(0x1d7)]('click', _0x6f68db => { const _0xf10849 = _0x3f74dd; _0x6f68db[_0xf10849(0x1ae)] === imageModal && (imageModal[_0xf10849(0x1a5)][_0xf10849(0x1da)] = 'none'); }); function editClient(_0xfe5cee) { const _0xfb2a72 = _0x3f74dd, _0x1586af = clients['find'](_0x3e0adc => _0x3e0adc['id'] === _0xfe5cee); _0x1586af && (modalTitle[_0xfb2a72(0x1a4)] = 'Modifier\x20un\x20Client', submitBtn[_0xfb2a72(0x1a4)] = _0xfb2a72(0x1b2), clientIdInput[_0xfb2a72(0x1d5)] = _0x1586af['id'], document[_0xfb2a72(0x1ad)](_0xfb2a72(0x1ac))[_0xfb2a72(0x1d5)] = _0x1586af[_0xfb2a72(0x1ac)], document[_0xfb2a72(0x1ad)](_0xfb2a72(0x1d3))[_0xfb2a72(0x1d5)] = _0x1586af[_0xfb2a72(0x1d3)], document['getElementById'](_0xfb2a72(0x1e7))[_0xfb2a72(0x1d5)] = _0x1586af[_0xfb2a72(0x1e7)], document[_0xfb2a72(0x1ad)](_0xfb2a72(0x1a3))[_0xfb2a72(0x1d5)] = _0x1586af[_0xfb2a72(0x1a3)], modal[_0xfb2a72(0x1a5)][_0xfb2a72(0x1da)] = _0xfb2a72(0x1a9)); } async function deleteClient(_0x33cffa) { const _0x44d58e = _0x3f74dd; if (confirm(_0x44d58e(0x1c2))) try { const _0x38ce0a = await fetchWithAuth(_0x44d58e(0x1eb) + _0x33cffa, { 'method': _0x44d58e(0x19e) }); _0x38ce0a['ok'] ? (alert(_0x44d58e(0x1c8)), fetchClients()) : alert(_0x44d58e(0x1d6)); } catch (_0x1d1dad) { console[_0x44d58e(0x1f4)](_0x44d58e(0x18e), _0x1d1dad); } } searchInput[_0x3f74dd(0x1d7)](_0x3f74dd(0x1e0), () => { const _0x42aed0 = _0x3f74dd, _0xb7c6f5 = searchInput['value'][_0x42aed0(0x1be)]()['toLowerCase'](); filterClients(_0xb7c6f5); }), searchBtn['addEventListener']('click', () => { const _0x4bae1b = _0x3f74dd, _0x139a45 = searchInput[_0x4bae1b(0x1d5)]['trim']()['toLowerCase'](); filterClients(_0x139a45); }); const logoutBtn = document['getElementById'](_0x3f74dd(0x1b7)); logoutBtn['addEventListener'](_0x3f74dd(0x1b0), () => { const _0x13edd1 = _0x3f74dd; localStorage[_0x13edd1(0x196)](_0x13edd1(0x1b5)), window[_0x13edd1(0x1ba)][_0x13edd1(0x18d)] = 'index.html'; }); const changePasswordBtn = document[_0x3f74dd(0x1ad)]('changePasswordBtn'), changePasswordModal = document[_0x3f74dd(0x1ad)]('changePasswordModal'), closeChangePasswordModalBtn = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1ed)), changePasswordForm = document[_0x3f74dd(0x1ad)](_0x3f74dd(0x1aa)); changePasswordBtn[_0x3f74dd(0x1d7)](_0x3f74dd(0x1b0), () => { const _0x3e5625 = _0x3f74dd; changePasswordModal[_0x3e5625(0x1a5)]['display'] = _0x3e5625(0x1a9); }), closeChangePasswordModalBtn['addEventListener']('click', () => { const _0x23c115 = _0x3f74dd; changePasswordModal['style'][_0x23c115(0x1da)] = _0x23c115(0x1db); }), window[_0x3f74dd(0x1d7)]('click', _0x106b52 => { const _0x2a7187 = _0x3f74dd; _0x106b52['target'] === changePasswordModal && (changePasswordModal[_0x2a7187(0x1a5)]['display'] = _0x2a7187(0x1db)); }), changePasswordForm[_0x3f74dd(0x1d7)](_0x3f74dd(0x1ef), async _0x129e93 => { const _0x20fed9 = _0x3f74dd; _0x129e93[_0x20fed9(0x19f)](); const _0x3660bb = document['getElementById'](_0x20fed9(0x1e4))[_0x20fed9(0x1d5)], _0x362d8d = document[_0x20fed9(0x1ad)](_0x20fed9(0x194))[_0x20fed9(0x1d5)], _0x5623a0 = document[_0x20fed9(0x1ad)]('confirmNewPassword')['value']; if (_0x362d8d !== _0x5623a0) { alert(_0x20fed9(0x1cf)); return; } try { const _0x3f7833 = await fetchWithAuth(_0x20fed9(0x1bb), { 'method': _0x20fed9(0x1bc), 'headers': { 'Content-Type': _0x20fed9(0x1e9) }, 'body': JSON['stringify']({ 'currentPassword': _0x3660bb, 'newPassword': _0x362d8d }) }), _0x6ab6be = await _0x3f7833['json'](); _0x3f7833['ok'] ? (alert(_0x20fed9(0x1f6)), changePasswordForm[_0x20fed9(0x1d0)](), changePasswordModal[_0x20fed9(0x1a5)][_0x20fed9(0x1da)] = _0x20fed9(0x1db)) : alert(_0x6ab6be[_0x20fed9(0x1f4)] || _0x20fed9(0x1d9)); } catch (_0x2fbd1f) { console[_0x20fed9(0x1f4)](_0x20fed9(0x18e), _0x2fbd1f), alert(_0x20fed9(0x190)); } }), fetchClients(); let inactivityTimer; const INACTIVITY_DURATION = 0xf * 0x3c * 0x3e8, TRANSPARENCY_STATE_KEY = 'isAppTransparent'; function makeAppTransparent() { const _0x4295dc = _0x3f74dd; document[_0x4295dc(0x1d2)][_0x4295dc(0x1a5)][_0x4295dc(0x1b1)] = _0x4295dc(0x1e5), document[_0x4295dc(0x1d2)][_0x4295dc(0x1a5)][_0x4295dc(0x1de)] = _0x4295dc(0x1e1), localStorage[_0x4295dc(0x18f)](TRANSPARENCY_STATE_KEY, _0x4295dc(0x1ce)), document[_0x4295dc(0x1e3)]('click', resetInactivityTimer), document[_0x4295dc(0x1e3)]('keydown', resetInactivityTimer), document[_0x4295dc(0x1e3)](_0x4295dc(0x197), resetInactivityTimer); } function resetInactivityTimer() { clearTimeout(inactivityTimer), inactivityTimer = setTimeout(makeAppTransparent, INACTIVITY_DURATION); } function setupInactivityDetection() { const _0x4fc668 = _0x3f74dd; document['addEventListener'](_0x4fc668(0x1b0), resetInactivityTimer), document['addEventListener'](_0x4fc668(0x19a), resetInactivityTimer), document[_0x4fc668(0x1d7)](_0x4fc668(0x197), resetInactivityTimer), resetInactivityTimer(); } function checkTransparencyState() { const _0x3dd7a5 = _0x3f74dd, _0x84216d = localStorage[_0x3dd7a5(0x1e2)](TRANSPARENCY_STATE_KEY) === 'true'; _0x84216d ? (document[_0x3dd7a5(0x1d2)][_0x3dd7a5(0x1a5)]['opacity'] = _0x3dd7a5(0x1e5), document[_0x3dd7a5(0x1d2)][_0x3dd7a5(0x1a5)]['transition'] = 'opacity\x201s', document['removeEventListener']('click', resetInactivityTimer), document[_0x3dd7a5(0x1e3)](_0x3dd7a5(0x19a), resetInactivityTimer), document[_0x3dd7a5(0x1e3)](_0x3dd7a5(0x197), resetInactivityTimer)) : setupInactivityDetection(); } function resetTransparencyState() { const _0x75644e = _0x3f74dd; localStorage['removeItem'](TRANSPARENCY_STATE_KEY), document[_0x75644e(0x1d2)][_0x75644e(0x1a5)][_0x75644e(0x1b1)] = '1', setupInactivityDetection(); } function _0xbb3e(_0x1c2421, _0x5128a9) { const _0x29605c = _0x2960(); return _0xbb3e = function (_0xbb3ec3, _0x2f88e4) { _0xbb3ec3 = _0xbb3ec3 - 0x18d; let _0x1c39c1 = _0x29605c[_0xbb3ec3]; return _0x1c39c1; }, _0xbb3e(_0x1c2421, _0x5128a9); } window[_0x3f74dd(0x1d7)]('load', checkTransparencyState);