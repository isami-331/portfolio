// �X�N���[�����Ƀw�b�_�[�̏�Ԃ�؂�ւ���
window.addEventListener("scroll", function() {
    var header = document.querySelector(".site-header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
 // HTML���玁���Ƃӂ肪�Ȃ�<input>�v�f���擾
 const nameInput = document.getElementById("name");
 const nameKanaInput = document.getElementById("name_kana");

 // �G���[���b�Z�[�W��\������<span>�v�f���擾
 const nameError = document.getElementById("nameError");
 const nameKanaError = document.getElementById("nameKanaError");

 // ���M�{�^�����擾
 const submitButton = document.querySelector(".submit");

 // ���̓t�H�[���̓��e���ύX���ꂽ�Ƃ��ɌĂяo�����֐�
 function validateForm() {
     // �����Ƃӂ肪�Ȃ̒l���擾
     const nameValue = nameInput.value;
     const nameKanaValue = nameKanaInput.value;

     // �������󔒂̏ꍇ�A�G���[���b�Z�[�W��\��
     if (nameValue.trim() === "") {
         nameError.style.display = "block";
     } else {
         nameError.style.display = "none"; // �G���[���b�Z�[�W���\��
     }

     // �ӂ肪�Ȃ��󔒂̏ꍇ�A�G���[���b�Z�[�W��\��
     if (nameKanaValue.trim() === "") {
         nameKanaError.style.display = "block";
     } else {
         nameKanaError.style.display = "none"; // �G���[���b�Z�[�W���\��
     }

     // �ǂ�������͂���Ă���ꍇ�A���M�{�^����L�������{�^���̐F��ύX
     if (nameValue.trim() !== "" && nameKanaValue.trim() !== "") {
         submitButton.disabled = false;
         submitButton.style.backgroundColor = "#2778be"; // �{�^���̐F��ύX
     } else {
         submitButton.disabled = true;
         submitButton.style.backgroundColor = "#b3b3b3"; // �{�^���̐F��ύX
     }
 }

 // ���̓t�H�[���̓��e���ύX���ꂽ�Ƃ���validateForm�֐����Ăяo��
 nameInput.addEventListener("input", validateForm);
 nameKanaInput.addEventListener("input", validateForm);

 // �y�[�W�ǂݍ��ݎ��ɂ���xvalidateForm�֐����Ăяo���ď�����Ԃ�ݒ�
 validateForm();
 window.addEventListener("scroll", function() {
    var icons = document.querySelectorAll(".nav__item a .icon"); // ���ׂẴA�C�R���v�f���擾

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];

        if (window.scrollY > 0) {
            icon.style.height = "0px"; // �X�N���[�����ꂽ��A�C�R����height��0�ɂ���
        } else {
            icon.style.height = "50px"; // �X�N���[�����g�b�v�ɖ߂�����height�����ɖ߂��i��: 40px�j
        }
    }
});

// ���S�v�f���擾
const logoImage = document.getElementById("logo-image");
const logoLink = document.getElementById("logo-link");

let isAnimationStopped = false; // �A�j���[�V�����̏�Ԃ��Ǘ�

// ���S�N���b�N���̏���
logoLink.addEventListener("click", function(event) {
    event.preventDefault(); // �����N�̃f�t�H���g����𖳌���
    
    if (isAnimationStopped) {
        logoImage.style.animation = ""; // �A�j���[�V���������Z�b�g
    } else {
        logoImage.style.animation = "none"; // �A�j���[�V�������~
    }

    isAnimationStopped = !isAnimationStopped; // �A�j���[�V�����̏�Ԃ𔽓]
});

   // JavaScript�R�[�h
   let isFront = true;

   function flipCard(card) {
       const front = card.querySelector('.front');
       const back = card.querySelector('.back');

       if (isFront) {
           front.style.display = 'none';
           back.style.display = 'block';
       } else {
           front.style.display = 'block';
           back.style.display = 'none';
       }

       isFront = !isFront;
   }