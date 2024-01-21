// 필요한 HTML 엘리먼트를 가져오기
const recordedVideo = document.getElementById('recorded-video');
const startRecordingBtn = document.getElementById('start-recording');
const stopRecordingBtn = document.getElementById('stop-recording');
const downloadVideoBtn = document.getElementById('download-video');

let mediaRecorder;
let recordedChunks = [];

// 사용자 정의 파일 이름 및 저장 위치 입력 받기
const fileNameInput = prompt('녹화된 비디오 파일 이름을 입력하세요 (예: myvideo.mp4)');
if (!fileNameInput) {
    alert('파일 이름을 입력하지 않았습니다. 녹화를 중단합니다.');
} else {
    const saveLocation = prompt('파일을 저장할 경로를 입력하세요 (예: /Users/username/Desktop/)');
    if (!saveLocation) {
        alert('파일 저장 위치를 입력하지 않았습니다. 녹화를 중단합니다.');
    } else {
        const mediaStreamConstraints = {
            video: true,
            audio: true,
        };

        const options = {
            mimeType: 'video/webm;codecs=h264', // mp4 형식 지정
        };

        // 녹화를 시작하는 함수
        async function startRecording() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
                mediaRecorder = new MediaRecorder(stream, options);

                mediaRecorder.ondataavailable = event => {
                    if (event.data.size > 0) {
                        recordedChunks.push(event.data);
                    }
                };

                mediaRecorder.onstop = () => {
                    const blob = new Blob(recordedChunks, { type: 'video/mp4' });
                    const url = URL.createObjectURL(blob);

                    // 사용자가 입력한 파일 이름 및 저장 위치 사용
                    // const saveFileName = `${saveLocation}/${fileNameInput}`;
                    const saveFileName = `${saveLocation}/${fileNameInput}`;
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = saveFileName;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                };

                startRecordingBtn.disabled = true;
                stopRecordingBtn.disabled = false;
                downloadVideoBtn.disabled = true;

                recordedChunks.length = 0;
                mediaRecorder.start();
            } catch (error) {
                console.error('녹화를 시작하는 동안 오류 발생:', error);
            }
        }

        // 녹화를 중지하는 함수는 이전과 동일합니다.
        // ...

        // 녹화를 중지하는 함수
        function stopRecording() {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }

            startRecordingBtn.disabled = false;
            stopRecordingBtn.disabled = true;
            downloadVideoBtn.disabled = false;
        }


        // 버튼 클릭 이벤트 핸들러 등록은 이전과 동일합니다.
        // ...
        // 버튼 클릭 이벤트 핸들러 등록
        startRecordingBtn.addEventListener('click', startRecording);
        stopRecordingBtn.addEventListener('click', stopRecording);
        downloadVideoBtn.addEventListener('click', downloadVideo);
    }
}



// 비디오 다운로드
function downloadVideo() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'recorded-video.webm';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}


