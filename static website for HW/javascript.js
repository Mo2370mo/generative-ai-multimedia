
    // ---- وظيفة عرض/إخفاء بطاقات الأدوات ----
    var allTools = ['midjourney', 'runway', 'elevenlabs', 'suno', 'chatgpt'];

    function showTool(toolId) {
      // إخفاء جميع الأدوات
      for (var i = 0; i < allTools.length; i++) {
        var el = document.getElementById('tool-' + allTools[i]);
        if (el) {
          el.hidden = true;
        }
      }
      // عرض الأداة المختارة
      var target = document.getElementById('tool-' + toolId);
      if (target) {
        target.hidden = false;
      }
    }

    // ---- عرض الأداة الأولى عند تحميل الصفحة ----
    document.addEventListener('DOMContentLoaded', function () {
      showTool('midjourney');
    });

    // ---- وظيفة الانتقال السلس لأقسام الصفحة ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').slice(1);
        var targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // ---- وظيفة إظهار/إخفاء الأقسام الطويلة (قابلة للتوسيع) ----
    function toggleSection(sectionId) {
      var section = document.getElementById(sectionId);
      if (!section) return;
      if (section.hidden) {
        section.hidden = false;
      } else {
        section.hidden = true;
      }
    }

    // ---- تسجيل أحداث تشغيل الوسائط في وحدة التحكم (للمطورين) ----
    var allVideos = document.querySelectorAll('video');
    allVideos.forEach(function (video) {
      video.addEventListener('play', function () {
        console.log('[Multimedia] تشغيل الفيديو:', this.id);
      });
      video.addEventListener('ended', function () {
        console.log('[Multimedia] انتهى الفيديو:', this.id);
      });
    });

    var allAudios = document.querySelectorAll('audio');
    allAudios.forEach(function (audio) {
      audio.addEventListener('play', function () {
        console.log('[Multimedia] تشغيل الصوت:', this.id);
      });
    });

    // ---- عداد الزيارات في الجلسة (Session) ----
    var visitCount = sessionStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    sessionStorage.setItem('visitCount', visitCount);
    console.log('[Analytics] عدد مرات فتح الصفحة في هذه الجلسة:', visitCount);

