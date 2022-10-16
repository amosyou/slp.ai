import argparse
import speech_recognition as sr

parser = argparse.ArgumentParser()
parser.add_argument("-stt", help="speech-to-text")
args = parser.parse_args()

def main():
    r = sr.Recognizer()
    test = sr.AudioFile("/Users/hannahkuo/Downloads/" + args.stt)
    with test as source:
        audio = r.record(source)

    api_key = open("arched-gear-365707-4c8e178a8a28.json").read()
    message = r.recognize_google_cloud(audio, api_key)
    print(message)
    return message

if __name__ == "__main__":
    main()
