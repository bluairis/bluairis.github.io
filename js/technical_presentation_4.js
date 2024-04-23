var sound1 = new Howl(
    {
        src:['../audio/water_relaxing_sound.mp3'],
        volume: .5,
        loop: true,
        autoplay: false,
    }
);

var sound2 = new Howl(
    {
        src:['../audio/fireplace_relaxing_sound.mp3'],
        volume: .5,
        loop: true,
        autoplay: false,
    }
);

var Player = function(playlist){
    this.playlist = playlist;
    this.index = 0;

    track.innerHTML = "1. " + playlist[0].title;

    playlist.forEach(function(song)
    {
        var div=document.createElement('div');
        div.className = 'list-song';
        div.innerHTML = song.title;
        div.onclick = function()
        {
            player.skipTo(playlist.indexOf(song));
        };
        list.appendChild(div);
    });
};

Player.prototype = 
{
    play: function(index)
    {
        var self=this;
        var sound;

        index = typeof index === "number" ? index : self.index;
        var data = self.playlist[index];

        if (data.howl)
        {
            sound = data.howl;
        }
        else
        {
            sound = data.howl = new Howl
            ({
                src: ["../audio/" + data.file + ".mp3"],
                html5: true,
                onplay: function() {
                    duration.innerHTML = self.formatTime(Math.round(sound.duration()));
                    requestAnimationFrame(self.step.bind(self));
                }
            });
        }

        sound.play();
        track.innerHTML = index + 1 + ". " + data.title;

        if (sound.state() === 'loaded')
        {
            playControl.style.display = "none";
            pauseControl.style.display = "inline-block";
        }
        else
        {
            playControl.style.display = "none";
            pauseControl.style.display = "inline-block";
        }
        self.index = index
    },

    pause: function() {
        var self = this;
        var sound = self.playlist[self.index].howl;
        sound.pause();

        playControl.style.display = "inline-block";
        pauseControl.style.display = "none";
    },

    skip: function(direction)
    {
        var self=this;
        var index = 0;

        if (direction === "prev") {
            index = self.index -1;
            if (index < 0){
                index = self.playlist.length - 1;
            }
        }
        else {
            index = self.index + 1;
            if (index >= self.playlist.length) {
                index = 0;
            }
        }

        self.skipTo(index);
    },

    skipTo: function(index) {
        var self = this;

        if (self.playlist[self.index].howl) {
            self.playlist[self.index].howl.stop();
        }

        self.play(index);
    },

    step: function() {
        var self = this;

        var sound = self.playlist[self.index].howl;

        var seek = sound.seek() || 0;
        timer.innerHTML = self.formatTime(Math.round(seek));

        if (sound.playing()) {
            requestAnimationFrame(self.step.bind(self));
        }
    },

    formatTime: function(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;

        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
};

var player = new Player
([
    {
        title: 'Relaxing Water Sound',
        file: 'water_relaxing_sound',
        howl: null
    },
    {
        title: 'Relaxing Fire Sound',
        file: 'fireplace_relaxing_sound',
        howl: null
    },
    {
        title: 'Mountain Forest Relaxing Sound',
        file: 'mountain_forest_relaxing_sound',
        howl: null
    },
    {
        title: 'Mountain Forest Relaxing Sound',
        file: 'mountain_forest_relaxing_sound',
        howl: null
    },
]);

playControl.style.display = "inline-block";
pauseControl.style.display = "none";

playControl.addEventListener('click', function() {
    player.play();
});
pauseControl.addEventListener('click', function() {
    player.pause();
});
previousControl.addEventListener('click', function() {
    player.skip("prev");
});
nextControl.addEventListener('click', function() {
    player.skip("next");
});

play.addEventListener("click", playSound);

function playSound()
{
    sound1.play();
}

pause.addEventListener("click", pauseSound);

function pauseSound()
{
    sound1.pause();
}

playPause.addEventListener("click", playPauseSound)

function playPauseSound()
{
    return sound2.playing() ? sound2.pause() : sound2.play();
}