import argparse
from ast import parse

parser = argparse.ArgumentParser()
parser.add_argument("-f", help="speech-to-text")
args = parser.parse_args()

def main():
    import speech_recognition as sr
    r = sr.Recognizer()
    test = sr.AudioFile(args.f)
    with test as source:
        audio = r.record(source)

    api_key = open("arched-gear-365707-4c8e178a8a28.json").read()
    message = r.recognize_google_cloud(audio, api_key)

    return message

if __name__ == "__main__":
    main()
